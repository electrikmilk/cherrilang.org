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

Provide a string of the action `WFWorkflowActionIdentifier`. Then, optionally provide a dictionary for the `WFWorkflowActionParameters`.

```ruby
rawAction("is.workflow.actions.gettext", {
     "WFTextActionText": "Hello, world!"
})
```

This defines a text action with the text `Hello World!`. This action is already defined in Cherri using a text literal. Still, this example demonstrates how third-party action libraries can be written in Cherri, or how actions not yet implemented in Cherri can be utilized.

## Variable References

### Inline String References

Inline string variable references work just as they would elsewhere in Cherri.

```
action saveFile(text path) {
    const prefix = "folder/"
    rawAction("is.workflow.actions.documentpicker.save", {
         "WFFileDestinationPath": "{prefix}/{path}",
     })
}
```

Again, just like with the text action, there is already a `saveFile()` action; this is only an example.

### Variable Value

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

Only a single variable is allowed; if this is not detected, the compiler treats the value as a string with inline variable references.
