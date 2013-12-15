---
layout: post
title:  "Changing to Jekyll."
date:   2013-12-15 13:28:22
categories: jekyll update
---

I am changing away from Octopress.  Octopress, like RVM, is great for
bootstrapping a blog more quickly, but part of my growth as a wannabe
developer has to be based on figuring out how Jekyll works first.  It's how
you learn.  I'm using a fresh new Jekyll blog to build my Github Pages.

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Alan')
#=> prints 'Hi, Alan' to STDOUT.
{% endhighlight %}

It looks like Jekyll by itself already offers several features that I wasn't
aware of, such as support for code snippets.  I can use `{% raw %} {% highlight ruby %} {% endraw %}`
to start a code block and it will show up prettified.

I'm making it a goal to eventually bring back several lost features, such as
RSS feeds and excerpts.

With great thanks to [Mojombo][jekyll-gh].

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
