---
title: Comments
layout: default
parent: Documentation
nav_order: 3
---

# Comments

## Usage

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

```ruby
// ...
nothing()
// TODO: Fix weird bug here
nothing()
// ...
```

## Including comments

### Slash syntax comments

Use the `--comments` (`-c`) argument to include your comments as actions. If you do, do not add a `*` to the front of a line in multiline comments; it will make its way into the Shortcut.

### Explicit comments

You can use the comment action to explicitly add a comment action without including your slash syntax comments.

```ruby
comment('This will always show up in the Shortcut.')
// This will not show up in the shortcut (unless you use the comment argument).
comment('
Multiline explicit comment.
')
```
