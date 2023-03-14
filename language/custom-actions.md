---
title: Custom Actions
layout: default
parent: Documentation
nav_order: 11
---

# Custom Actions

You can define your own actions. Currently they function more like macros that allow you to paste a set of actions, variables, etc.

To define your own action, use the following syntax:

```ruby
action myCustomAction() {
  // ...
}
```

Then reference the action to paste its contents in place of that line.

```ruby
myCustomAction()
```
