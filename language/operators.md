---
title: Operators
layout: default
parent: Documentation
nav_order: 8
---

# Operators
{: .no_toc }

Cherri supports arithmetic and assignment operators on numeric values and variables.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Arithmetic

Arithmetic expressions operate on numbers and produce a result that can be stored in a constant or variable.

| Operator | Description |
|---|---|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Modulus (remainder) |

```ruby
const sum = 10 + 5
const difference = 10 - 5
const product = 10 * 5
const quotient = 10 / 5
const remainder = 10 % 3
```

Both operands can be variables:

```ruby
@a = 10
@b = 3
const result = @a % @b
```

Future release
{: .label .label-purple }

An expression can start with a variable or a constant, no parentheses needed:

```ruby
@a = 10
const result = @a % 3
const scaled = result * 2
```

Parentheses set the order of operations, at the start of an expression or after an operator.

```ruby
@a = 10
const grouped = (@a + 5) * 2
const groupedAfterOperator = 2 * (@a + 5)
```

An action call can be used as an operand. The action runs first and its output is used in the expression:

```ruby
@items = list("a", "b", "c")
const nextCount = count(@items) + 1
```

Expressions can be used wherever a value is expected, including action arguments, array and dictionary items, and repeat counts.

```ruby
@a = 10
const doubled = number(@a * 2)
@values = [@a + 1, @a + 2]
repeat i for 3 + 1 {
    show("{i}")
}
```

An expression used inside another statement is added as its own action just before that statement, and the statement uses that action's output. One operation between two operands uses a **Math** action. Anything longer uses a **Calculate Expression** action.

Expressions also work as conditional values:

```ruby
@a = 10
if @a + 1 > 10 {
    show("Greater")
}
```

## Assignment

Assignment operators modify a variable in place.

| Operator | Description |
|---|---|
| `=` | Set value |
| `+=` | Add to |
| `-=` | Subtract from |
| `*=` | Multiply by |
| `/=` | Divide by |

```ruby
@n = 10
@n += 5
@n -= 2
@n *= 3
@n /= 2
```

Future release
{: .label .label-purple }

The value can also be a variable, an expression, or an action call:

```ruby
@n = 10
@a = 3
@items = list("a", "b")
@n += @a
@n -= 1 + 1
@n += @n * 2
@n *= count(@items)
```

### Array append

When used on an array variable, `+=` appends an item rather than performing numeric addition.

```ruby
@items: array
@items += "first"
@items += "second"
```

## Conditional and logical operators

Conditional operators (`==`, `!=`, `contains`, `>`, etc.) and logical operators (`&&`, `||`) are used in `if` statements and are covered in [Control Flow](/language/control-flow).
