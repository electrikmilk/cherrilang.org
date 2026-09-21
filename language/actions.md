---
title: Actions
layout: default
parent: Documentation
has_children: true
nav_order: 3
---

# Actions

Actions in Cherri are intended to be easier to use, as in some cases, single actions have been split up into multiple
actions to reduce the number of arguments and complexity. Some arguments are optional, and some are required.

Actions can be used just like you would call a function in another language

```ruby
alert("Hello, Cherri!")
```

## Standard Actions

Below are categories of standard Shortcut actions currently supported. Keep in mind that actions in each category, other than the basic actions, need to be included.

[Please report incomplete or non-working actions](https://github.com/electrikmilk/cherri/issues)

## Reading an Action's Signature

Each action page shows a call signature like this:

```
downloadURL(text url, dictionary! ?headers): variable
```

| Part | Meaning |
|---|---|
| `?` before the name | The argument is optional. |
| `!` after the type | The argument requires a literal value — you cannot pass a variable here. |
| `&` before the type | The argument is passed by reference — the action modifies that variable directly. |
| `...` before the name | The argument accepts multiple values. |
| `name = value` | The default value used when the argument is omitted. |
| `: type` after `()` | The type of value the action outputs, if any. |

{: .note }
Passing a variable where a `!` argument is expected throws a compile error, so it's worth checking for `!` before you wire up a variable there.

## Can I contribute actions, even non-standard actions?

Yes, it's not very hard!

[Learn more about contributing actions](/compiler/actions)
