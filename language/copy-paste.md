---
title: Copy/Paste Actions
layout: default
parent: Documentation
nav_order: 12
---


# Pasteables

Cherri has a built-in pre-processing mechanism for copy-pasting commonly used sets of actions.

Use the following syntax to create a "Pasteable":

```
copy identifier {
    alert("Hello!")
}
```
Then to paste it somewhere in your Shortcut, use the following syntax:

```
paste identifier
```

{: .note }
For efficiency, copy statements must proceed pastes. In other words, you cannot paste a copy before declaring it.


The resulting Shortcut will have `alert("Hello")` placed wherever you use `paste identifier`!

These work differently from actions in that actions reduce the amount of actions you use to do something to just one usage, this allows you to not have to use the abstraction that creates and pastes actions when needed.

{: .warning }
Strong caution against the misuse of this syntax. Make sure you understand how pasting the copied actions will affect your resulting Shortcut.