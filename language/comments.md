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

### Result

Comments are not included by default in the Shortcut to help reduce the size of the file.

This is useful for Shortcuts where the comments in your code are not relevant to the user of the Shortcut.

```javascript
// ...
nothing()
// TODO: Fix weird bug here
nothing()
// ...
```

To include them as comment actions, use the `--comments` (`-c`) argument. 

If you do, do not add a `*` to the front of a line in multiline comments, it will make its way into the Shortcut.
