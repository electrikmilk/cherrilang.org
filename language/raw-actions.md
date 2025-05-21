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
rawAction("is.workflow.actions.gettext", {
     "WFTextActionText": "Hello, world!"
})
```

This defines a text action with the text `Hello World!`. This action is already defined in Cherri using a text literal, but this is an example of how 3rd-party action libraries could be written in Cherri, or actions not yet implemented in Cherri can be used.

## Variable References

To reference a variable, you use an inline string variable (e.g.,`"{variable}"`).

```
action saveFile(text path, var file, promptSave bool, overwrite bool) {
    rawAction("is.workflow.actions.documentpicker.save", {
         "WFFileDestinationPath": "{path}",
         "WFAskWhereToSave": "{promptSave}",
         "WFSaveFileOverwrite": "{overwrite}",
         "WFInput": "{file}"
     })
}
```

Again, just like with the text action, there is already a `saveFile()` action; this is only an example.
