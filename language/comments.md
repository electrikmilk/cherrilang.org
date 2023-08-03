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

Comments of either type are translated over into the compiled Shortcut as comment actions. Unless, you use the `--comments` (`-c`) argument, that will strip comments and not include them in the compiled Shortcut.

This is useful for Shortcuts where the comments in your code are not relevant to the final Shortcut. For example, If your Shortcut ends up being too large of a file, and the code is filled with comments, use this option and the resulting Shortcut will be marginally smaller.
