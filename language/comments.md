---
title: Comments
layout: default
parent: Documentation
nav_order: 11
---

# Comments

To write a single-line comment use `//`.

```
// Single-line comment
```

To write multiline comments, use `/* ... */`.

Do not add a `*` to the front of a line, it will make its way into the compiled Shortcut.

```
/*
This is a multi-line comment
*/

/*
Line 1
Line 2
*/
```

Comments of either type are translated over into the compiled Shortcut as comment actions.

Unless, you use the `--comments` (`-c`) argument, that will strip comments and not include them in the compiled Shortcut. This is useful for Shortcuts where the in code comments are not relevant, and if they are removed, the resulting Shortcut will be smaller.
