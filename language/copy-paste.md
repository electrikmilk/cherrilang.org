---
title: Copy/Paste Actions
layout: default
parent: Documentation
nav_order: 10
---

# Copy/Paste Actions

{: .warning }
Strong caution against the misuse of this syntax, such as long chains of pastables pasting other pastables.

Cherri has a built-in preprocessing mechanism called "pastables" for copy-pasting commonly used sets of actions, including variables and any other valid Cherri code.

## Setup code to copy

Use a `copy` statement to create a "Pasteable":

```
copy identifier {
    alert("Hello!")
}
```

## Paste

Use a `paste` statement to paste the contents of the pasteable on that line before the file is parsed.

{: .note }
For efficiency, you cannot use `paste` before declaring the `copy` it's using.

```ruby
#include 'actions/scripting'

copy carbon {
    alert("Hello!")
}

paste carbon

alert("Goodbye")

paste carbon
```

In the example above, the resulting Shortcut will have an `alert("Hello")` pasted wherever `paste carbon` is used.

## Difference from functions and includes

These work differently from [functions](/language/functions) in that they reduce the number of actions as functions add a lot of actions. If you don't _need_ to use the abstraction of functions (you don't need to use arguments) to reuse the same actions if it's not necessary for what you need to reuse.

However, depending on how much code is in the pastable and how many times you need to paste it, it may produce fewer actions to use functions instead.

This also allows you to "include" code without needing a separate file. You could include a file with a bunch of pastables to selectively include code from that file.
