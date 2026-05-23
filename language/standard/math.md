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

{: .note }
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

### Statistic

Perform a statistical operation on `input`.

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

## Rounding

### Round

Rounds number to specified rounding place.

```
enum roundingPlace {
    'Millions',
    'Hundred Thousands',
    'Ten Thousands',
    'Thousands',
    'Hundreds',
    'Tens',
    'Integer',
    'Tenths',
    'Hundredths',
    'Thousandths',
    'Ten-Thousandths',
    'Hundred-Thousandths',
    'Millionths',
    'Ten-Millionths',
    'Hundred-Millionths',
    'Billionths',
    '10^',
}

round(number number, roundingPlace ?roundTo = "Integer"): number
```

---

### Round Down

Always round a number down to a specified rounding place.

```
enum roundingPlace {
    'Millions',
    'Hundred Thousands',
    'Ten Thousands',
    'Thousands',
    'Hundreds',
    'Tens',
    'Integer',
    'Tenths',
    'Hundredths',
    'Thousandths',
    'Ten-Thousandths',
    'Hundred-Thousandths',
    'Millionths',
    'Ten-Millionths',
    'Hundred-Millionths',
    'Billionths',
    '10^',
}

floor(number number, roundingPlace ?roundTo = "Integer"): number
```

---

### Round Up

Always round a number up to a specified rounding place.

```
enum roundingPlace {
    'Millions',
    'Hundred Thousands',
    'Ten Thousands',
    'Thousands',
    'Hundreds',
    'Tens',
    'Integer',
    'Tenths',
    'Hundredths',
    'Thousandths',
    'Ten-Thousandths',
    'Hundred-Thousandths',
    'Millionths',
    'Ten-Millionths',
    'Hundred-Millionths',
    'Billionths',
    '10^',
}

ceil(number number, roundingPlace ?roundTo = "Integer"): number
```
## Measurement

### Convert Measurement

```
enum measurementUnitType {
    'Acceleration',
    'Angle',
    'Area',
    'Concentration Mass',
    'Dispersion',
    'Duration',
    'Electric Charge',
    'Electric Current',
    'Electric Potential Difference',
    'V Electric Resistance',
    'Energy',
    'Frequency',
    'Fuel Efficiency',
    'Illuminance',
    'Information Storage',
    'Length',
    'Mass',
    'Power',
    'Pressure',
    'Speed',
    'Temperature',
    'Volume',
}

convertMeasurement(variable measurement, measurementUnitType unitType, text unit)
```

---

### Create Measurement

```
enum measurementUnitType {
    'Acceleration',
    'Angle',
    'Area',
    'Concentration Mass',
    'Dispersion',
    'Duration',
    'Electric Charge',
    'Electric Current',
    'Electric Potential Difference',
    'V Electric Resistance',
    'Energy',
    'Frequency',
    'Fuel Efficiency',
    'Illuminance',
    'Information Storage',
    'Length',
    'Mass',
    'Power',
    'Pressure',
    'Speed',
    'Temperature',
    'Volume',
}

measurement(text magnitude, measurementUnitType unitType, text unit)
```

