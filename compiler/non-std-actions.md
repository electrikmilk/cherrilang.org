---
title: Non-Standard Actions
layout: default
parent: Contributing
nav_order: 2
---

# Defining Non-Standard Actions

## Action Definitions

The easiest way to add actions from a 3rd party app or a Shortcuts extension app is to create a Cherri file and define reusable actions using action definitions:

**Example:**

```
#define action 'is.workflow.actions.setvariable' setVariable(text name: 'WFVariableName', variable input: 'WFInput')
```

[Learn more](language/action-definitions){: .btn }

## Raw Actions

You could also use either [custom actions](/language/custom-actions) or [pastables](/language/copy-paste) to wrap a [raw action](/language/raw-actions). This file can then be [included](/language/includes) to easily use the 3rd party actions.

**Example:**

`my-app-actions.cherri`
```
action createPost(text postText, var attachment) {
    const output = rawAction("com.example.app.createpost", {
        "WFPost": "{postText}",
        "WFInput": "{attachment}"
    })
    output("{output}")
}

copy TurnOnTV {
    rawAction("com.example.app.turnon")
}
```

`index.cherri`
```
#include 'my-app-actions.cherri'

@file = selectFile()
createPost(Ask, file)
```

When contributing actions, if an action has a complex number of arguments, try your best to split the action into
multiple actions to reduce the number of arguments and complexity.
