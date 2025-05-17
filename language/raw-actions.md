---
title: Raw Action
layout: default
parent: Documentation
nav_order: 13
---

# Raw Action

You can write a raw definition of an action not defined inside Cherri, in Cherri.

```ruby
rawAction("is.workflow.actions.gettext", [
      {
          "key": "WFTextActionText",
          "type": "string",
          "value": "Hello, world!"
      }
])
```

This defines a text action with the text `Hello World!`. This action is already defined in Cherri using a text literal, but this is an example of how 3rd-party action libraries could be written in Cherri, or actions not yet implemented in Cherri can be used.

## Upcoming Improvement

Next release
{: .label .label-purple }

Raw actions are getting a fix and improvement in the upcoming release (1.0.1). You will be able to simply input a valid JSON dictionary as the parameters for your raw action. To reference a variable, you use an inline string variable (e.g.,`"{variable}"`)

```
rawAction("is.workflow.actions.gettext", {
     "WFTextActionText": "Hello, world!"
})
```

It also fixes a contingency between compiled and decompiled Shortcuts. This was not thoroughly tested, apologies.
