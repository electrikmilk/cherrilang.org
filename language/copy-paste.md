---
title: Copy/Paste Actions
layout: default
parent: Documentation
nav_order: 12
---


# Pasteables

{: .warning }
This feature is currently only available if you [build from source](/language/install#build-from-source).

Cherri has a built-in pre-processing mechanism for copy-pasting commonly used sets of actions.

Use the following syntax to create a "Pasteable":

```
copy identifier {
    alert("Hello!")
}
```

Then, to paste the contents of the pasteable in the resulting Shortcut, use the following syntax:

```
paste identifier
```

The resulting Shortcut will have `alert("Hello")` pasted wherever you used `paste identifier`!

{: .note }
For efficiency, `copy` statements must proceed pastes. In other words, you cannot use `paste` before declaring it's `copy`.

These work differently from custom actions in that custom actions reduce the number of actions you use to do something to just one usage that can be called over and over again. With pasteables, you don't _need_ to use the abstraction of custom actions (especially if you don't need to use arguments) to reuse the same actions if it's not necessary for what you need to reuse.

{: .warning }
Strong caution against the misuse of this syntax. Make sure you understand how pasting the copied actions will affect your resulting Shortcut.
