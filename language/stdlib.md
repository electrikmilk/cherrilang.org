---
title: Standard Library
layout: default
parent: Documentation
nav_order: 16
---

# Standard library of custom actions

You can use the Cherri standard library of [custom actions](/language/custom-actions) using the following syntax:

```
#include 'stdlib'
```

This will give you access to the following actions:

## Scripting

### Run JavaScript

Runs the JavaScript code in `script` and returns the output.

```
runJS(text script)
```