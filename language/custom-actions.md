---
title: Custom Actions
layout: default
parent: Documentation
nav_order: 12
---

# Custom Actions

You can define your own actions containing variables, calls to other actions etc. that you can then reference anywhere.

Custom actions have no scope and are able to modify variables outside of their statement body.

To define your own action, use the following syntax:

```
action myCustomAction() {
  // do stuff...
  nothing()
}
```

Then reference the action to paste its contents in place of that line.

```
myCustomAction()
```

Custom actions do not accept arguments or return values.
