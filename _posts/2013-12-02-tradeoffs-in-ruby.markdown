---
layout: post
title: "Tradeoffs in Ruby"
date: 2013-12-02 20:12
comments: true
categories: 
---

People who create programming languages make trade-offs.

In JavaScript and Python, using a function without parentheses returns
a message about that function.  In Ruby, it actually invokes the method, or in
its parlance, "sends a message to that object".

What if you actually want the method without calling it?  In JavaScript,
it's possible to pass a callback function to a function to give it.  In Ruby,
however, you must call method(:foo) to get the method itself.

If you set a variable to the method, then to call it, you need to use the call
method or use `.()`

{% highlight ruby %}
str = "foo"
len_method = str.method(:length)
len_method.() # => 3
{% endhighlight %}

In Ruby, lambdas and procs all similarly need to be called using the call method
or `.()`.

{% highlight ruby %}
add_3 = proc { |x| x + 3 }
add_3.(3)
{% endhighlight %}
