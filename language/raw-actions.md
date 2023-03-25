---
title: Raw Action
layout: default
parent: Documentation
nav_order: 13
---

# Raw Action

You can write your own definition of an action not defined inside of Cherri, in Cherri.

```
rawAction("is.workflow.actions.gettext", [
      {
          "key": "WFTextActionText",
          "type": "string",
          "value": "Hello, world!"
      }
])
```

This defines a text action with the text `Hello World!`. This action is already defined in Cherri using a string variable, but this is an example of how 3rd-party action libraries could be written in Cherri or actions not yet implemented in Cherri can be used.
