---
title: "Running Two Application Servers on One VPS"
layout: post
tags:
  - elixir
  - emberjs
  - phoenix
category: programming
---

When I first learned programming, I was spoiled by the fact that Heroku
and Sprockets exist. Sprockets, the JavaScript and CSS compiler now
replaced by Webpack in Rails 5, made it easy to run a single server that
can serve both HTML page and JS assets.

When I started working in single-page application (SPA), I knew I had to
spin up two servers, one for the API, and one for the JS assets. I felt
that it was too cumbersome to run two servers when you could have just
one. Therefore, I thought in Ruby the ability to use a gem like
`ember-rails` or `backbone-rails` was the only way to keep everything on
a single application, and therefore on a single server. This is especially
important when you choose to use Heroku to deploy your application.

Unfortunately, using a gem like these means you are now relying on
a dependency and you hope the developer(s) behind it are diligently
keeping it up to date when Rails is upgraded.

For a long time, I thought this was the only way to run an application.

As it turns out, this is incorrect!

If you have your own Virtual Private Server, like Digital Ocean,
Rackspace, Linode, or even Amazon EC2, it is possible for you to run two
separate applications on a single server through the magic of Nginx.

I'm going to show you how!


