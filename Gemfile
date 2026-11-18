# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll", "~> 4.4"

group :jekyll_plugins do
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-paginate-v2", "~> 3.0"
  gem "jekyll-redirect-from", "~> 0.16"
end

group :test do
  gem "html-proofer", "~> 5.0"
end

platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2.0", :platforms => [:windows]