---
title: Menus
layout: default
parent: Documentation
nav_order: 4
---

# Menus
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Choose From Menu

The syntax for a menu is very similar to a `switch` statement. Use the following syntax to create a menu:

```ruby
menu "Prompt" {
    item "Item 1":
        /* do stuff if selected... */
    item "Item 2":
        /* do other stuff if selected... */
}
```

The menu prompt can be a variable or a literal value, and so can each item label.

## Choose From List

Create a variable with a `list()` action as its value.

Just like in Shortcuts, each item must be text, but you can still use inline variables.

```ruby
@list = list("Item 1", "Item 2", "Item 3")
```

Then simply use the `chooseFromList()` action with the list and a prompt.

```ruby
@list = list("Item 1", "Item 2", "Item 3")
@chosenItem = chooseFromList(list,"Choose a item")
```

The variable `chosenItem` will hold the item chosen from your list by the user.
