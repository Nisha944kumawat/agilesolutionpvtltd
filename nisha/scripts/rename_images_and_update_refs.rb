ROOT = File.expand_path("..", __dir__)
IMAGES_DIR = File.join(ROOT, "assets", "images")
TEXT_GLOBS = [
  File.join(ROOT, "*.html"),
  File.join(ROOT, "assets", "js", "*.js"),
  File.join(ROOT, "assets", "css", "*.css"),
  File.join(ROOT, "*.xml"),
]

GENERIC_ALTS = [
  "img",
  "about us",
  "brand-logo",
  "barnd-logo",
  "process-img",
  "annivarsary-img",
  "banner 01",
  "client logo",
  "workprocess",
  "right arrow",
  "arrow",
  "user photo",
]

OVERRIDE_NAMES = {
  "001.jpg" => "why-choose-us-background.jpg",
  "003.jpg" => "industry-marketing-showcase.jpg",
  "01.png" => "agile-edtech-solutions-badge.png",
  "672b589289142679bcbd3ff8.png" => "client-brand-logo.png",
  "logo.png" => "agile-edtech-solutions-logo.png",
  "favicon.ico" => "agile-edtech-solutions-favicon.ico",
  "drnikhilbansal-webiste.jpg" => "dr-nikhil-bansal-website.jpg",
  "codelgniter.webp" => "codeigniter.webp",
  "apiapi.png" => "whatsapp-api-integration.png",
  "mmmmmmmm.jpg" => "digital-marketing-team.jpg",
}

def slugify(value)
  value
    .downcase
    .gsub(/[^a-z0-9]+/, "-")
    .gsub(/^-+|-+$/, "")
    .gsub(/-+/, "-")
end

def alt_from_filename(path)
  base = File.basename(path, File.extname(path))
  return "" if base == "right-arrow"
  return "Agile Edtech Solutions digital services illustration" if base == "banner-01"
  return "Agile Edtech Solutions work process" if base == "workprocess"
  return "Agile Edtech Solutions client testimonial" if base.start_with?("testimonoal")

  words = base.split("-").reject(&:empty?)
  return "Agile Edtech Solutions image" if words.empty?

  formatted = words.map do |word|
    case word
    when "seo", "api", "crm", "aso", "ppc", "sms", "wa", "ui", "ux", "aws"
      word.upcase
    when "meta"
      "Meta"
    else
      word.capitalize
    end
  end
  formatted.join(" ")
end

def rename_with_temp(source, target)
  return if source == target

  temp_target = "#{target}.tmp-rename"
  File.rename(source, temp_target)
  File.rename(temp_target, target)
end

mapping = {}
used_targets = {}

Dir.children(IMAGES_DIR).sort.each do |entry|
  source = File.join(IMAGES_DIR, entry)
  next unless File.file?(source)

  ext = File.extname(entry).downcase
  next unless [".jpg", ".jpeg", ".png", ".webp", ".svg", ".avif", ".gif", ".ico"].include?(ext)

  candidate = OVERRIDE_NAMES[entry]
  unless candidate
    base = File.basename(entry, File.extname(entry))
    slug = slugify(base)
    slug = "image" if slug.empty?
    candidate = "#{slug}#{ext}"
  end
  counter = 2
  while used_targets[candidate] && used_targets[candidate] != entry
    candidate = "#{slug}-#{counter}#{ext}"
    counter += 1
  end

  used_targets[candidate] = entry
  mapping["assets/images/#{entry}"] = "assets/images/#{candidate}"
end

mapping.each do |old_ref, new_ref|
  old_file = File.join(ROOT, old_ref)
  new_file = File.join(ROOT, new_ref)
  next if old_file == new_file
  rename_with_temp(old_file, new_file)
end

Dir.glob(TEXT_GLOBS).each do |file|
  content = File.read(file)
  updated = content.dup

  mapping.each do |old_ref, new_ref|
    updated.gsub!(old_ref, new_ref)
    updated.gsub!("https://agilesolutions.co.in/#{old_ref}", "https://agilesolutions.co.in/#{new_ref}")
  end

  updated.gsub!(/<img\b([^>]*?)src="([^"]+)"([^>]*?)alt="([^"]*)"([^>]*)>/i) do
    pre_src = Regexp.last_match(1)
    src = Regexp.last_match(2)
    between = Regexp.last_match(3)
    alt = Regexp.last_match(4).to_s.strip
    post_alt = Regexp.last_match(5)
    replacement_alt = alt

    if replacement_alt.empty? || GENERIC_ALTS.include?(replacement_alt.downcase)
      replacement_alt = alt_from_filename(src)
    end

    %Q(<img#{pre_src}src="#{src}"#{between}alt="#{replacement_alt}"#{post_alt}>)
  end

  updated.gsub!(/<img\b((?:(?!alt=)[^>])*)src="([^"]+)"([^>]*)>/i) do
    attrs_before = Regexp.last_match(1)
    src = Regexp.last_match(2)
    attrs_after = Regexp.last_match(3)
    if "#{attrs_before} #{attrs_after}".include?('alt=')
      Regexp.last_match(0)
    else
      %Q(<img#{attrs_before}src="#{src}" alt="#{alt_from_filename(src)}"#{attrs_after}>)
    end
  end

  next if updated == content
  File.write(file, updated)
end

puts "Renamed #{mapping.count} image references and updated linked files."
