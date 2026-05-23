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

### Array append

When used on an array variable, `+=` appends an item rather than performing numeric addition.

```ruby
@items: array
@items += "first"
@items += "second"
```

## Conditional and logical operators

Conditional operators (`==`, `!=`, `contains`, `>`, etc.) and logical operators (`&&`, `||`) are used in `if` statements and are covered in [Control Flow](/language/control-flow).
