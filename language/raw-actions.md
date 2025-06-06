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
     "WFAlertActionCancelButtonShown": false
})
```

This defines an alert action with the message `Hello World!`. This action is already defined in Cherri using the `alert()` action. Still, this example demonstrates how third-party actions and entire libraries could be written in Cherri, but most importantly, how any actions not implemented in Cherri can be used.

However, an alternative called [action definitons](/language/define-actions) is upcoming in a future release which create reusable action definitions.

## Variable Values

Future Release
{: .label .label-purple }

To use a variable value for a parameter that only accepts a variable value, prepend an inline variable reference's brackets in a string value with the character `$`.

```
action saveFile(variable file) {
    rawAction("is.workflow.actions.documentpicker.save", {
         "WFInput": "${file}"
     })
}
```

Again, just like with the `alert()` action, there is already a `saveFile()` action; this is only an example.

Only a single variable is allowed; if this is not detected, the compiler treats the value as a string with inline variable references.
