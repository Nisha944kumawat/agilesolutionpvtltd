ROOT = File.expand_path("..", __dir__)
IMAGES_DIR = File.join(ROOT, "assets", "images")
SIPS = "/usr/bin/sips"

TARGETS = [
  "arezou-website.png",
  "bg-img.jpg",
  "nainsoftech.png",
  "industry-marketing-showcase.jpg",
  "ndhlogistic-logo.png",
  "r2rssb-graphy-website.png",
  "footer-bg.jpg",
  "why-choose-us-background.jpg",
  "map-info.png",
  "hero-img.jpg",
  "about-page-bg.jpg",
  "map-info.jpg",
  "web-application.jpg",
  "bg-img2.jpg",
  "application-programming-interface.jpg",
  "banner-01.png",
  "page-banner.jpg",
  "20785.jpg",
  "online-marketing-1.png",
  "online-marketing-commercial-connection-technology-opt.jpg",
]

def dimensions(path)
  output = `#{SIPS} -g pixelWidth -g pixelHeight "#{path}"`
  width = output[/pixelWidth:\s+(\d+)/, 1].to_i
  height = output[/pixelHeight:\s+(\d+)/, 1].to_i
  [width, height]
end

def run(command)
  success = system(command)
  raise "Command failed: #{command}" unless success
end

TARGETS.each do |filename|
  path = File.join(IMAGES_DIR, filename)
  next unless File.exist?(path)

  width, height = dimensions(path)
  ext = File.extname(filename).downcase

  if filename == "20785.jpg"
    run(%(#{SIPS} -Z 600 "#{path}" >/dev/null))
  elsif filename.include?("logo")
    run(%(#{SIPS} --resampleWidth 900 "#{path}" >/dev/null))
  elsif height > (width * 3)
    run(%(#{SIPS} --resampleWidth 1200 "#{path}" >/dev/null))
  elsif width >= 3000 || height >= 3000
    run(%(#{SIPS} -Z 2200 "#{path}" >/dev/null))
  elsif width >= 2200 || height >= 2200
    run(%(#{SIPS} -Z 1800 "#{path}" >/dev/null))
  end

  if [".jpg", ".jpeg"].include?(ext)
    run(%(#{SIPS} --setProperty formatOptions 72 "#{path}" >/dev/null))
  end
end

puts "Optimized #{TARGETS.length} image targets where available."
