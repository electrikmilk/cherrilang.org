---
title: Define Actions
layout: default
parent: Documentation
nav_order: 13
---

# Define Actions

Future Release
{: .label .label-purple }

## Definition

To define a Shortcut action raw, in the same reusable way as the [standard Shortcut actions](/language/actions) in the compiler, use the following syntax similar to a [definition](/language/definitions):

```
#define action 'com.example.app.action' myCustomAction()

myCustomAction()
```

A raw string `WFWorkflowActionIdentifier` is required between `#define action` and the identifier of the action.

## Arguments

The syntax for the action arguments is the same as [custom actions](/language/custom-actions#defining-arguments), and you can also set an [output type](/language/custom-actions#output-type).

One exception is that it requires the key for the parameter that the argument will be used to create. Add a `:` after the argument name, then a raw string with the parameter key:

```
#define action 'com.example.app.action' myCustomAction(variable file: 'WFInput')

@file = selectFile()
myCustomAction(file)
```
