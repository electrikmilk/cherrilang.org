---
title: Raw Action
layout: default
parent: Documentation
nav_order: 13
---

# Raw Action

You can write your own definition of an action not defined inside of Cherri, in Cherri.

```
@params = [
    {
        "key": "WFAlertActionMessage",
        "type": "string",
        "value": "Hello, world!"
    },
    {
        "key": "WFAlertActionTitle",
        "type": "string",
        "value": "Alert"
    }
]

rawAction("is.workflow.actions.alert", params)
```

This defines an alert action with a message `Hello World!` and title `Alert`. This action is already defined in Cherri, but allows for 3rd-party action libraries to be written in Cherri or actions not yet implemented in Cherri.
