source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.1'
# Use sqlite3 as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
group :development do
  gem 'spring'
  gem "spring-commands-rspec"
end

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'debugger', group: [:development, :test]

group :test do
  gem 'rspec-rails', '~> 3.0.0.beta'
  gem 'capybara'
  gem "factory_girl_rails", "~> 4.0"
  gem 'poltergeist'
  gem 'database_cleaner'
end

gem 'httparty'
gem "active_model_serializers"

gem 'ember-rails'

group :production do
  gem 'rails_12factor'
end

# HTML5 Video
gem "mediaelement_rails"

group :test, :development do
  gem "qunit-rails"
end
