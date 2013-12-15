---
layout: post
title: "How to install Rails on Ubuntu using rbenv"
date: 2012-11-27 20:31
comments: true
categories: 
---
The first step is to follow this great write-up on Gist from (https://gist.github.com/2627011)[Olistik].

### Get rbenv

    cd ~
    git clone git://github.com/sstephenson/rbenv.git .rbenv
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
    echo 'eval "$(rbenv init -)"' >> ~/.bashrc
    exec $SHELL

### Get ruby-build

    mkdir -p ~/.rbenv/plugins
    cd ~/.rbenv/plugins
    git clone git://github.com/sstephenson/ruby-build.git
    echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
    exec $SHELL

### Get ruby

    sudo apt-get install zlib1g-dev build-essential libssl-dev libreadline-dev
    rbenv install 1.9.3-p327
    rbenv global 1.9.3-p327

### Set local version

Go into the directory containing your Rails app

    rbenv local 1.9.3-p327

It will create a .rbenv-version file to ensure that you switch to the right ruby version
in case you decide to upgrade.

### Disable installation of rdoc and ri

    echo "gem: --no-ri --no-rdoc" > ~/.gemrc

### Install dependencies for nokogiri and postgresql

    sudo apt-get install libxml2-dev libxslt1-dev postgresql libpq-dev

### Install bundler and bundle install

    gem install bundler
    bundle install

### Set up Postgres

    sudo -u postgres psql # and in the postgres type the following with the appropriate substitution
    create user username with createdb password strong_password;
    create database rails_devel with owner username;
