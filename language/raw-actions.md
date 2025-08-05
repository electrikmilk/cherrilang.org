---
title: Raw Action
layout: default
parent: Documentation
nav_order: 13
---

# Raw Action
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

You can write a raw definition of an action not defined inside Cherri, in Cherri.

## Defining an action

Actions are mostly made up of an identifier and, optionally, parameters. To add an action to your Shortcut raw, provide a string of the action `WFWorkflowActionIdentifier`. Then, optionally provide a dictionary for each of the `WFWorkflowActionParameters`.

```ruby
rawAction("is.workflow.actions.alert", {
     "WFAlertActionMessage": "Hello, world!",
     "WFAlertActionCancelButtonShown": false
})
```

This defines an alert action with the message `Hello World!`. This action is already defined in Cherri using the `alert()` action. Still, this example demonstrates a simple way actions not implemented in Cherri can be used.

However, there is an alternative called [action definitions](/language/action-definitions), which creates reusable action definitions.

## Parsing Shortcut Data

To find the identifier and parameters for an action from a Shortcut not implemented in Cherri, see [parsing out action data from a raw Shortcut](/faq#how-do-i-use-non-standard-actions).

## Variable Values

To use a variable value for a parameter that only accepts a variable value, prepend an inline variable reference's brackets in a string value with the character `$`.

```swift
action saveFile(variable file) {
    rawAction("is.workflow.actions.documentpicker.save", {
         "WFInput": "${file}"
     })
}
```

Again, just like with the `alert()` action, there is already a `saveFile()` action; this is only an example.

Only a single variable is allowed; if this is not detected, the compiler treats the value as a string with inline variable references.
