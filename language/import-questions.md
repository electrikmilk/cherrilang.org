---
title: Import Questions
layout: default
parent: Documentation
nav_order: 10
---

# Import Questions

To add an import question, use the following syntax:

```
#question identifier "Prompt" "Default Value"
```

To assign the question to something, simply mention the `identifier`. However, this can only be done once in an argument for an action.

### Example

```
#question name "Name" "Siri"

alert(name)
```
