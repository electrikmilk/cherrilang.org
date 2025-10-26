---
title: 3rd-Party Actions
layout: default
parent: Contributing
nav_order: 2
---

# Defining 3rd-Party Actions

## Action Definitions

The easiest way to add actions from a 3rd party app or a Shortcuts extension app is to create a Cherri file and define reusable actions using action definitions:

**Example:**

```
action 'is.workflow.actions.setvariable' setVariable(text name: 'WFVariableName', variable input: 'WFInput')
```

[Learn more](/language/action-definitions){: .btn }

## Raw Actions

You could also use either [functions](/language/functions) or [pastables](/language/copy-paste) to wrap a [raw action](/language/raw-actions). This file can then be [included](/language/includes) to easily use the 3rd party actions.

---

When contributing actions, if an action has a complex number of arguments, try your best to split the action into
multiple actions to reduce the number of arguments and complexity.
