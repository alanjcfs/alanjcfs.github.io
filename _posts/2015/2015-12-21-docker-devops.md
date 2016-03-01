---
title: "Simplifying Devops with Docker"
layout: post
tags:
  - programming
  - docker
  - operations
category: devops
---

Devops is one of those topics that is easy to understand on a high level, and
yet is difficult when trying to apply it. Which should you use? What is popular?
Chef, Puppet, Docker?

For someone just getting started on deploying applications, the easiest method
would be to create an account on Heroku. For someone who would really like to
learn more and know the nuts and bolts of what an application deployment
entails, Heroku can seem like a toy.

Fortunately, Docker might just be the type of thing that opens the users to a
bigger world. It provides the benefits of easy deployment (especially now that
Heroku supports deployment with Docker), without the complexity and error-prone
process of using Chef or Puppet.

Someone sent me an article on getting started with Docker, but I haven't had the
time to play around with it. [Getting Started with Docker: Simplifying Devops](http://www.toptal.com/devops/getting-started-with-docker-simplifying-devops)

What I will say, though, is that using Docker on Mac or Windows is a little more
complicated than trying Docker on a Linux machine because Mac and Windows, not
having the containerization technology, require you to download a virtual
machine that runs Linux. As a result, there is a distinction between the virtual
machine that runs a Linux VM, and the containers inside of that VM that is
run, which can even by an Ubuntu distro.
