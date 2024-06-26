---
title: Copy/Paste Actions
layout: default
parent: Documentation
nav_order: 10
---

# Pasteables

{: .warning }
Strong caution against the misuse of this syntax, such as long chains of pastables pasting other pastables.

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
For efficiency, you cannot use `paste` before declaring the `copy` it's using.

These work differently from [custom actions](/language/custom-actions) in that they reduce the number of actions you use to do something to just one usage that can be called over and over again. With pasteables, you don't _need_ to use the abstraction of custom actions (especially if you don't need to use arguments) to reuse the same actions if it's not necessary for what you need to reuse.
