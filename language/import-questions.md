---
title: Import Questions
layout: default
parent: Documentation
nav_order: 10
---

# Import Questions

To define import/setup questions, use the following syntax:

```
#question identifier "Prompt" "Default Value"
```

To assign the question to something, reference the `identifier`. 

However, per Shortcuts, you can only use it once in an action argument. It also cannot be used as an inline variable or variable value.

### Example

Normally, the title of the alert is empty. Shortcuts display question values this way in their native preview. This is because questions are defined outside of the action.

Click on the info circle in the preview and go to the Setup tab to see the defined import/setup question.

```ruby
#question name "Enter Your Name" "Siri"

alert(name, "Hello")
```

## Storing Question Values

To store the value of a question in a variable, use the action `text()` to store a question in a **Text** action. This is typically not recommended, as a string value is faster and easier, but questions require an action parameter to be bound to.

```
#question store "Question" "Default"

const test = text(store)
```
