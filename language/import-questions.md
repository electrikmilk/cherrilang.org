---
title: Import Questions
layout: default
parent: Documentation
nav_order: 10
---

# Import Questions

To define an import question, use the following syntax:

```
#question identifier "Prompt" "Default Value"
```

To assign the question to something, reference the `identifier`. However, this can only be done once in an argument for an action, not as an inline variable or variable value.

### Example

Click on the info circle in the preview and go to the Setup tab to see the defined import question.

```ruby
#question name "Enter Your Name" "Siri"

alert(name, "Hello")
```

Normally, the title of the alert is empty. Shortcuts displays import question values this way in their native preview. This is because import questions are defined outside the actions.
