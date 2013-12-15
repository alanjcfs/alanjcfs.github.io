---
layout: post
title: "Multiple Controllers for a Model"
date: 2013-06-08 09:21
comments: true
categories: 
---
I have gained another understanding in the MVC. Just as a controller isn't necessarily limited to
initializing one model, one model isn't limited to one controller. 
You can have more than one controller for each model.

When I was writing the web application for Charm, an internal database application used by
DCARA, there was one model called Event, which was equivalent to Community Education.

The database schema specified event info, census count. There was also the attendees table
with a foreign key to events. I was thinking that I had to use one controller to handle
the model, therefore I created the census action that would route people to
a page for updating census info. But, the problem I had was that after clicking "Submit,"
it would redirect to the `events#edit` page if there were errors in it.

I've learned two solutions to this: The first would be to create a separate controller that
would provide a view into that part of the model. The model itself doesn't care what the
controllers do, it simply has to make itself consistent when it saves. The routes for the
controller would be a nested `resources :census` within `resources :events`.

The second solution would be to manually specify which URL you want to send the update to.
In this case, I need to create another action, perhaps `events#update_census` which would
attempt to save the model and redirect back to the `events#census`.

The Rails way would probably be the first solution, because you get to continue using
all the standard Rails actions, `new`, `edit`, `update`, `create`, and `destroy`, though
in the case of census, only `edit` and `update` would be applicable.

The neat thing is that with separate controllers, and with Rails 4's 
[strong_parameters](https://github.com/rails/strong_parameters), 
you will be able to control which attributes are permitted to be updated per controller.
This freedom means that there is reduced risk of a user attempting to send more
parameter attributes that are shown on a page.

With strong_parameters, I am now able to understand better tha danger of mass assignment,
and I am ready to say goodbye to it.
