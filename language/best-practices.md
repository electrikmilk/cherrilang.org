---
title: Best practices
layout: default
parent: Documentation
nav_order: 14
---

# Creating Efficient Shortcuts

Notes on creating memory efficient, small file size, low action count Shortcuts in Cherri.

## Use constants

Using constants when applicable allows you to reference the output of an action instead of assigning it to a variable. For every variable you never mutate the value of, you can reduce your Shortcut by 1 action. This is not a lot if you have one variable, but it adds up the more variables you add to a Shortcut.

```javascript
const immutable = 5
show("{immutable}")
```

V.S.

```ruby
@mutable = 5
show("{mutable}")
```

## Clear unused outputs

If an action produces an output you wil not use, consider adding the `nothing()` action after it. This will clear the current output, reducing runtime memory.

This is done automatically for statements, such as if/else, menu, etc to clear their output.

## Default or optional values

If an action has an optional argument and/or default value, avoid filling it in. If you must fill it in with its default value to set the value of an argument after it, use `nil` instead. This will prevent the parameter from being set, resulting in a smaller Shortcut.
