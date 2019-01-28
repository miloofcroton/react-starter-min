# About

This is a basic homepage.

# How to Add Posts

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext`.

# Overview of Process for Starting this Site from Scratch

* Create Github Repo
* Clone using SSH
* cd into root project directory
* gem install jekyll bundler
  * this is done to allow Jekyll to create a project with the Minima theme
* Jekyll new . --force
* add theme to gemfile
* bundle install
* update _config.yml
* bundle exec jekyll serve

# Things to Fix

* trim down and fix layouts
* host gstatic images locally
* move blog to entirely separate jekyll project that's designed for handling lots of content

# Credits

* to HTML5 UP, for the Dimension design
* to Andrew Banchich, for writing the dimension_jekyll_theme gem
