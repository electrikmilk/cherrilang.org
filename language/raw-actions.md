---
title: Raw Action
layout: default
parent: Documentation
nav_order: 13
---

# Raw Action

You can write a raw definition of an action not defined inside Cherri, in Cherri.

```ruby
rawAction("is.workflow.actions.gettext", {
     "WFTextActionText": "Hello, world!"
})
```

This defines a text action with the text `Hello World!`. This action is already defined in Cherri using a text literal, but this is an example of how 3rd-party action libraries could be written in Cherri, or actions not yet implemented in Cherri can be used.

To reference a variable, you use an inline string variable (e.g.,`"{variable}"`).

```
action saveFile(text path, var file) {
    rawAction("is.workflow.actions.documentpicker.save", {
         "WFFileDestinationPath": "{path}",
         "WFAskWhereToSave": true,
         "WFSaveFileOverwrite": false,
         "WFInput": "{file}"
     })
}


```
