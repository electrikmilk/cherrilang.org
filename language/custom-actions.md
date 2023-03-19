---
title: Custom Actions
layout: default
parent: Documentation
nav_order: 12
---

# Custom Actions

You can define your own actions containing variables, calls to other actions etc. that you can then reference anywhere.

To define your own action, use the following syntax:

```
action myCustomAction(arg1, arg2, ...) {
  // do stuff...
  nothing()
}
```

Then reference the action to paste its contents in place of that line.

```
myCustomAction("Hello", "World")
```
