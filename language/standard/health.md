---
title: Health
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 8
---

# Health Actions
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
> #include 'actions/health'
> ```

Health quantity values use Cherri's `qty(value, "unit")` syntax. For example, a blood pressure reading uses `mmHg`:

```ruby
#include 'actions/health'

const systolic = prompt("Systolic", "Number")
const diastolic = prompt("Diastolic", "Number")

logBloodPressure(qty(systolic, "mmHg"), qty(diastolic, "mmHg"))
```

The generated Shortcut writes the reading to Health using the Shortcuts Health sample action. The macOS HealthKit SDK used for validation exposes 120 quantity identifiers, 70 category identifiers, 2 correlation identifiers, and 84 workout activity types.

## Samples

### Log Blood Pressure

Log systolic and diastolic blood pressure to Health.

```
enum bloodPressureUnit {
    'mmHg',
}

logBloodPressure(#bloodPressureUnit (qty)?systolic, #bloodPressureUnit (qty)?diastolic, variable ?date)
```

**Example Usage**

```ruby
#include 'actions/health'

logBloodPressure(qty(120, "mmHg"), qty(80, "mmHg"))
logBloodPressure(qty(120, "mmHg"), qty(80, "mmHg"), CurrentDate)
```

---

### Log Health Quantity

Log a single quantity sample to Health.

```
enum healthQuantityUnit {
    'count',
    'count/min',
    '%',
    'kg',
    'lb',
    'g',
    'mg',
    'mg/dL',
    'mg/dl',
    'mmol/L',
    'kcal',
    'Cal',
    'cal',
    'L',
    'mL',
    'm',
    'km',
    'cm',
    'mm',
    's',
    'ms',
    'min',
    'hr',
    'd',
    'degC',
    'degF',
    'S',
    'W',
    'Pa',
    'kPa',
    'atm',
    'dBASPL',
    'J',
    'kJ',
    'J/s',
    'm/s',
    'm/s^2',
    'L/min',
    'mL/(kg*min)',
    'ml/(kg*min)',
    'kcal/(kg*hr)',
    'IU',
    'appleEffortScore',
    'mmHg',
}

enum healthQuantitySampleType {
    'Steps',
    'Walking + Running Distance',
    'Walking Step Length',
    'Walking Speed',
    'Time In Daylight',
    'Vertical Oscillation',
    'Forced Expiratory Volume 1',
    'Body Mass',
    'Body Mass Index',
    'Body Fat Percentage',
    'Heart Rate',
    'Oxygen Saturation',
    'Respiratory Rate',
    'Blood Glucose',
    'Dietary Energy',
    'Water',
    'Systolic Blood Pressure',
    'Diastolic Blood Pressure',
}

logHealthQuantity(#healthQuantityUnit (qty)?quantity, healthQuantitySampleType sampleType, variable ?date)
```

**Example Usage**

```ruby
#include 'actions/health'

logHealthQuantity(qty(72, "count/min"), "Heart Rate")
logHealthQuantity(qty(70, "kg"), "Body Mass")
logHealthQuantity(qty(20, "count"), "Steps", CurrentDate)
```

If you are logging blood pressure, prefer `logBloodPressure()` so the systolic and diastolic values are recorded together.

---

### Log Health Category

Log a category sample, such as a symptom, mindful session, or sleep analysis, to Health. The `value` and optional `additionalValue` strings map directly to Shortcuts' Health category picker values.

```
enum healthCategorySampleType {
    'Bladder Incontinence',
    'Constipation',
    'Acne',
    'Sleep Analysis',
    'Mindful Session',
}

logHealthCategory(healthCategorySampleType sampleType, text value, text ?additionalValue, variable ?startDate, variable ?endDate)
```

**Example Usage**

```ruby
logHealthCategory("Acne", "Present", nil, CurrentDate, CurrentDate)
```

---

### Find Health Samples

Find quantity samples from Health.

```
findHealthSamples(variable input): array
```

**Example Usage**

```ruby
#include 'actions/health'

const steps = logHealthQuantity(qty(20, "count"), "Steps", CurrentDate)
findHealthSamples(steps)
```

---

### Open Health View

Open a Health category view. The identifier is Apple's Health target identifier, and the optional title and symbol are used by the Shortcuts action target payload.

```
openHealthView(text identifier, text ?title, text ?symbol)
```

**Example Usage**

```ruby
openHealthView("HKDisplayCategoryIdentifier_13", "Respiratory", "lungs.fill")
```

---

### Open Health Data

Open a Health data type.

```
openHealthData(text identifier, text ?title, text ?symbol)
```

**Example Usage**

```ruby
openHealthData("HKDisplayTypeIdentifierForcedVitalCapacity", "Forced Vital Capacity", "lungs.fill")
```

---

### Log Workout

Log a workout to Health.

```
logWorkout(text workoutType, #healthQuantityUnit (qty)?calories)
```

**Example Usage**

```ruby
logWorkout("Basketball", qty(500, "Cal"))
```
