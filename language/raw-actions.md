---
title: Raw Action
layout: default
parent: Documentation
nav_order: 13
---

# Raw Action

You can write a raw definition of an action not defined inside Cherri, in Cherri.

## Defining an action

Provide a string of the action `WFWorkflowActionIdentifier`. Then, optionally provide a dictionary for the `WFWorkflowActionParameters`.

```ruby
rawAction("is.workflow.actions.alert", {
     "WFAlertActionMessage": "Hello, world!",
     "WFAlertActionCancelButtonShown": false,
})
```

This defines a text action with the text `Hello World!`. This action is already defined in Cherri using the `alert()` action. Still, this example demonstrates how third-party action libraries could be written in Cherri, but most importantly, how any actions not implemented in Cherri can be used.

## Variable Values

Future Release
{: .label .label-purple }

Some actions' parameters do not accept a string at all, let alone one with the variable you want to use referenced inline as the value for a parameter.

To use a variable value for a parameter, prepend the **single** inline variable reference brackets with the character `$`.

```
action saveFile(variable file) {
    rawAction("is.workflow.actions.documentpicker.save", {
         "WFInput": "${file}"
     })
}
```

Again, just like with the text action, there is already a `saveFile()` action; this is only an example.

Only a single variable is allowed; if this is not detected, the compiler treats the value as a string with inline variable references.
