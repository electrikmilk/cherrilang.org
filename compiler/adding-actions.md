---
title: Adding Actions
layout: default
parent: Contributing
nav_order: 2
---

# Defining Missing Actions

## Action Definitions

The easiest way to add actions from Shortcuts in Cherri is to define reusable actions using action definitions:

```
action 'is.workflow.actions.setvariable' setVariable(text name: 'WFVariableName', variable input: 'WFInput')
```

This can also be used with packages to create 3rd party action libraries.

[Learn more](/language/action-definitions){: .btn }

{: .note }
When contributing actions, if an action has a complex number of arguments, try your best to split the action into multiple actions using the `default` keyword to reduce the number of arguments and complexity.

## Raw Actions

You could also use either [functions](/language/functions) or [pastables](/language/copy-paste) to wrap a [raw action](/language/raw-actions). This file can then be [included](/language/includes) to easily use the 3rd party actions.
