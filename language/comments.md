---
title: Comments
layout: default
parent: Documentation
nav_order: 11
---

# Comments

### Single-line comment:

```
// Single-line comment
```

### Multi-line comment:

```
/*
This is a multi-line comment
*/

/*
Line 1
Line 2
*/
```

Do not add a `*` to the front of a line, it will make its way into the compiled Shortcut.

### Result

Comments are not included in the final Shortcut to help reduce the size of the Shortcut.

This is useful for Shortcuts where the comments in your code are not relevant to the user of the Shortcut.

To include them as comment actions, use the `--comments` (`-c`) argument. 
