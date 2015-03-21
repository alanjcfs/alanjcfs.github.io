---
title: "Simple Rust"
layout: post
tags:
  - programming
category: rust
---

When it comes to simple programming, Rust can look very familiar and simple.

{% highlight rust %}
use std::f64::consts::PI;
fn get_area(r: f64) -> f64 {
    PI * r * r
}
fn get_perimeter(r: f64) -> f64 {
    2f64 * PI * r
}
fn modify_number(mut n: f64) -> () {
    n = n + 4f64;
}
fn main() {
    let num: f64 = 100.5;
    println!("The area of the circle with the radius of {} is {}", num, get_area(num));
    println!("The perimeter of the circle with the radius of {} is {}", num, get_perimeter(num));

    let mut num: f64 = 50.0;
    println!("The area of the circle with the radius of {} is {}", num, get_area(num));
    println!("The perimeter of the circle with the radius of {} is {}", num, get_perimeter(num));
    num = get_area(num);
    println!("The area of the circle with the radius of {} is {}", num, get_area(num));
    println!("The perimeter of the circle with the radius of {} is {}", num, get_perimeter(num));
    modify_number(num);
    println!("The number is {}", num);
    println!("The area of the circle with the radius of {} is {}", num, get_area(num));
    println!("The perimeter of the circle with the radius of {} is {}", num, get_perimeter(num));
}
{% endhighlight %}
