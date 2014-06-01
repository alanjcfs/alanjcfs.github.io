---
layout: post
title: "Exuberant Ctags"
date: 2014-06-01 15:19:00
category: programming
---
To use Exuberant Ctags in an environment where your codebase is split among
several different repos, first run in the root directory containing these
repos:

    ctags -R .

What it does is create `tags` file that has tagged all the files recursively
across the repositories.

In your local vimrc, write the following line:

{% highlight vim %}
if filereadable("/path/to/root/directory/tags")
  set tags+=/path/to/root/directory/tags
endif
{% endhighlight %}
