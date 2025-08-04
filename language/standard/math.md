---
title: Math
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 11
---

# Math Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .warning }
> To use actions in this category, use this include statement:
>
> ```
> #include 'actions/math'
> ```

### Calculate

Perform various calculation operations using one or two operands.

```
enum calculationOperation {
    'x^2',
    'х^3',
    'x^у',
    'e^x',
    '10^x',
    'In(x)',
    'log(x)',
    '√x',
    '∛x',
    'x!',
    'sin(x)',
    'cos(X)',
    'tan(x)',
    'abs(x)',
}

calculate(calculationOperation operation, number operandOne, number ?operandTwo): number
```

---

### Round

Rounds number up to specified rounding place.

```
enum rounding {
    'Ones Place',
    'Tens Place',
    'Hundreds Place',
    'Thousands',
    'Ten Thousands',
    'Hundred Thousands',
    'Millions',
}

round(number number, rounding ?roundTo = "Ones Place")
```

---

### Round Down

Always round a number down to a specified rounding place.

```
enum rounding {
    'Ones Place',
    'Tens Place',
    'Hundreds Place',
    'Thousands',
    'Ten Thousands',
    'Hundred Thousands',
    'Millions',
}

floor(number number, rounding ?roundTo = "Ones Place")
```

---

### Round Up

Always round a number up to a specified rounding place.

```
enum rounding {
    'Ones Place',
    'Tens Place',
    'Hundreds Place',
    'Thousands',
    'Ten Thousands',
    'Hundred Thousands',
    'Millions',
}

ceil(number number, rounding ?roundTo = "Ones Place")
```

---

### Statistic

Perform a statistic operation on `input`.

```
enum statisticOperations {
    'Average',
    'Minimum',
    'Maximum',
    'Sum',
    'Median',
    'Mode',
    'Range',
    'Standard Deviation',
}

statistic(statisticOperations operation, variable input)
```
