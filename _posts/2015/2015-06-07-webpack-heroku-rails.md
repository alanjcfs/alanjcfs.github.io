---
layout: post
category: devops
title: "Webpack Heroku Rails"
tags:
  - programming
  - devops
  - rails
  - heroku
  - javascript
  - webpack
---

I spent some time trying to figure out how to get webpack working in my Rails
application. It wasn't easy, but I figured it out. Additionally, I figured out
how to get started with it on Heroku.

I spent time doing some research online, involving doing some Googling for
terms related to "Heroku", "Rails", and "Webpack" in some combinations. I
would say that if I were deploying to my own VM, I would probably have a
slightly easier time (I suspect I'd just be trading off time spent on
configurations for time spent on other configurations).

I based my understanding on these three resources: [How to use webpack with
Rails](1), [WebPack and ES6](2), [Choose ES6 modules Today!](3).

[1]: http://clarkdave.net/2015/01/how-to-use-webpack-with-rails/
[2]: https://hackhands.com/fast-rich-client-rails-development-webpack-es6-transpiler/
[3]: http://developer.telerik.com/featured/choose-es6-modules-today/

I chose to use Webpack because jspm, while not new and unpopular, seemed
designed to be run on a Node server, and not for being incorporated into a
Rails application. I wanted to see if I could put together an all-in-one Rails
application with assets compiled by Node as needed.

The tutorials for webpack, however, were designed for AMD and CommonJS. They
were written before ES2016 took shape. The web is evolving very quickly, and I
acknowledge that my instructions will probably seem outdated in six months.

What I wanted was a way to write using JavaScript using ES6 and ES6 module
system now. Webpack was designed for CommonJS and AMD, and hasn't yet been
rewritten to use the ES6 module syntax.

I installed webpack using npm, initialized the project in the Rails directory
with:

    // Command prompts
    npm install -g webpack
    npm init
    npm install webpack --save-dev

I configured `webpack.config.js` to use the babel-loader, added an entry
point, and output a filename (such as `webpack-rails-bundle.js` which I
incorporate into Sprocket with

    // application.js
    //= require webpack-rails-bundle

I put the webpack-rails-bundle into .gitignore because I will use Heroku
buildpack to compile the assets for me.

The `entry.js` is the file in which I can do the importing of the various
modules I have defined, and attach to `window.$app`, which will make it
available to each page I render for JavaScript snippets. I found this was the
best approach to exposing a global variable. Using the `export-loader` and
require('expose?$!jQuery') did not work for me.

I also used `entry.js` to insert the following:

    import jQuery from 'jquery';
    import _ from 'lodash';
    window.$ = window.jQuery = jQuery;
    window._ = _;

now, in Sprockets, you can require the bundled JS first, and remove any
references to jQuery and _ because these will already be provided by webpack,
and gradually move your JS toward the module system.

I find that it's better to avoid using AMD or CommonJS when I push to Heroku
(using the `ddollar/heroku-buildpack-multi`).
