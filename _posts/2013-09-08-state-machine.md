---
layout: post
title: "State Machine"
date: 2013-09-08 23:13
comments: true
categories: 
---

I was thinking about state machines, and came across this blog post 
[Mojolingo: State Machines](https://mojolingo.com/blog/2013/state-machines/)

I have been aware of finite state machines, but I didn't have an idea of how
it could be useful.

I have not really used state machine in anything, so I am mostly speculating
about the potential uses of it.

In the case of one project I was working on, I could have made the user
a state machine. When a user is created, it is placed in "pending" state. This
pending state is necessary to prevent the user from being able to sign in until
after the credit card transaction is successful. Once the user has paid for
something, its status is changed to an "active" state, which will permit further
updates and sign ins.

Certain validations and certain actions apply only to certain states.
A pending user, for example, wouldn't have an email sent about successful
registration, and would not need to validate acceptance of terms of use.

A state machine can help ensure that a user never
change to another state. After a user has paid for a lifelong subscription to a
magazine, for example, that user should never be able to switch back to a
monthly subscription.

I think that the state machine concept can help reduce reliance on ad-hoc
validations based on if statements.  I just haven't figured out how to do it
properly.
