---
title: Action Definitions
layout: default
parent: Documentation
nav_order: 13
---

# Action Definitions

## Definition

To define a Shortcut action raw, in the same reusable way as the [standard Shortcut actions](/language/actions) in the compiler, use the following syntax:

```
action 'com.example.app.action' myCustomAction()

myCustomAction()
```

A raw text `WFWorkflowActionIdentifier` is required between `action` and the identifier of the action.

The only exception to this is for Shortcuts actions that start with `is.workflow.actions`. If the identifier namespaces are less than 4, we assume it is a classic Shortcuts action for the convenience of defining them.

You may see `#builtin` for an action definition printed by the compiler. These actions are internally defined in the compiler and require compile-time processing that either cannot practically be abstracted to Cherri or hasn't yet been implemented.

## Parsing Shortcut Data

To find the identifier and parameters for an action from a Shortcut not implemented in Cherri, see [parsing out action data from a raw Shortcut](/faq#how-do-i-use-non-standard-actions).

## Attributes

Attributes may be added in the following order after `action`:

- `default` - For decompilation, if multiple action definitions use the same identifier, use this action by default if no other actions match better.
- `mac`: - macOS-only action _OR_ `!mac`: non macOS action, iOS/iPadOS only.
- `v{version}` - Max 2: Specify an iOS version number restriction. Optionally append `>` for minimum and `<` for maximum, defaults to minimum if no suffix is added.

## Arguments

The syntax for the action arguments is the same as [functions](/language/functions#defining-arguments), and you can also set an [output type](/language/custom-actions#output-type).

One exception is that it requires the key for the parameter that the argument will be used to create. Add a `:` after the argument name, then a raw string with the parameter key:

```
action 'com.example.app.action' myCustomAction(variable file: 'WFInput'): bool

@file = selectFile()
myCustomAction(file)
```

## Add Parameters

To add extra parameters in the same way as a [raw action](/language/raw-actions), add a dictionary after the definition and an optional output type.

```
action 'com.example.app.action' myCustomAction(variable file: 'WFInput'): bool {
    "WFActionParameterName": true
}
```

## Example

Below is an example using the **Show Alert** action.

```ruby
action 'alert' showAlert(
    text message: 'WFAlertActionMessage',
    text ?title: 'WFAlertActionTitle',
    bool ?cancelButton: 'WFAlertActionCancelButtonShown' = true
)

showAlert("Hello, Cherri!")
showAlert("Hello, Cherri!", "Alert")
showAlert("Hello, Cherri!", "Alert", false)
```
