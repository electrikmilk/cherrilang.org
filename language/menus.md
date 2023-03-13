---
title: Menus
layout: default
parent: Documentation
nav_order: 4
---

# Menus

## Choose From Menu

The syntax for a menu is very similar to a `switch` statement. Use the following syntax to create a menu:

```go
menu "Prompt" {
    item "Item 1":
        // do stuff if selected...
    item "Item 2":
        // do other stuff if selected...
}
```

The menu prompt can be a variable, so can each case label, they also support inline variables in strings.

## Choose From List

Create a variable with a `list()` action as its value.

Just like in Shortcuts each item must be a string, but you can still insert variables.

```ruby
@list = list("Item 1", "Item 2", "Item 3")
```

Then simply use the `chooseFromList()` action with the list and a prompt.

```ruby
@chosenItem = chooseFromList(list,"Choose a item")
```

`chosenItem` will hold the item chosen from your list by the user.
