---
title: Control Flow
layout: default
parent: Documentation
nav_order: 6
---

# Control Flow
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## If/Otherwise

Use the following syntax:

```ruby
@intVar = 5
if intVar > 6 {
    
} else {
    
}
```

If statements are not required to contain the else statement but do require the ending curly brace as in other
languages.

The first operand of the if statement must be a variable. The second can optionally be a variable.

### Conditional Operators

- `==` Is
- `!=` Is Not
- `contains` Contains
- `!contains` Does Not Contain
- `beginsWith` Begins With
- `endsWith` Ends With
- `>` Greater Than
- `>=` Greater or Equal
- `<` Less Than
- `<=` Less or Equal

### Has Value/Does Not

For these conditional operators, you can compare the reference, or if checking for no value, prepend with a `!`.

```ruby
@variable: text
/* Has Any Value */
if variable {
    
}
/* Does not have any value */
if !variable {
    
}
```

### Between

This checks if `intVar` is between `5` and `7`.

```ruby
@intVar = 5
if intVar <> 5 7 {
    
}
```

### Multiple Conditions

You can use multiple conditions by separating each condition with the same logical operator:

- `&&` And
- `||` Or

To be clear, this is a limitation of how this has been implemented in Shortcuts; only "Any" (`||`) or "All" (`&&`) are allowed for logical comparison of conditions.

```ruby
@textVar = "test"
@intVar = 1
if textVar == "test" && intVar == 1 {
    // ...
}

if textVar == "test" || intVar == 1 {
    // ...
}
```

## Loops

### Repeat

Use the following syntax:

```ruby
@items: array
repeat i for 6 {
    @items += "Item {i}"
}
```

The number of times to repeat can also be a variable as long as it evaluates to a number value.

### Repeat With Each

Use the following syntax:

```ruby
@items = list("item 1","item 2","item 3")
for item in items {
    alert(item)
}
```

`list` must be an iterable variable.

### Repeat Globals

The `repeat` and `for` statements create variables as the `RepeatIndex` and `RepeatItem` globals need to be numbered after more than one nested repeat.

The globals `RepeatIndex` and `RepeatItem` are still available, but it is recommended to use the variables these statements create.

## Nesting

`if/else`, `repeat`, `for`, and `menu` can all be nested inside each other and vice versa.

## Automatic nothing actions at the end

The `nothing()` actions are automatically added to the ending block of any statement. This ensures the control flow block does not store any output to reduce memory usage.

## Control Flow Output

Prepend an `if`, `menu`, `repeat`, or `for` statement with a `const identifier = ` to assign a reference to the output.

```ruby
#include 'actions/network'

@deviceModel = "{Device['Model']}"
const connectionName = if deviceModel == "iPhone" {
    getCellularDetail("Carrier Name")
} else {
    getWifiDetail("Network Name")
}

show("{connectionName}")
```

```ruby
#include 'actions/device'
#include 'actions/sharing'

const deviceDetail = menu "Get Device Detail" {
    item "Battery":
        getBatteryLevel()
    item "Clipboard":
        getClipboard()
}

show("{deviceDetail}")
```

```ruby
const repeated = repeat i for 6 {
    number(i)
}

show("{repeated}")
```

```ruby
@items = ["Item 1", "Item 2", "Item 3"]
const map = for item in items {
    number(item)
}

show("{map}")
```
