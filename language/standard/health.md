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

The generated Shortcut writes the reading to Health using Shortcuts' Health actions. The macOS HealthKit SDK used for validation exposes 120 quantity identifiers, 70 category identifiers, 2 correlation identifiers, and 84 workout activity types. Cherri also supports the Health app navigation intents available in Shortcuts, including opening views, data types, categories, records, search, tabs, and the sleep schedule.

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

### Log Health Quantity Sample

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

logHealthQuantitySample(#healthQuantityUnit (qty)?quantity, healthQuantitySampleType sampleType, variable ?date)
```

**Example Usage**

```ruby
#include 'actions/health'

logHealthQuantitySample(qty(72, "count/min"), "Heart Rate")
logHealthQuantitySample(qty(70, "kg"), "Body Mass")
logHealthQuantitySample(qty(20, "count"), "Steps", CurrentDate)
```

If you are logging blood pressure, prefer `logBloodPressure()` so the systolic and diastolic values are recorded together.

---

### Log Health Category Sample

Log a category sample, such as a symptom, mindful session, or sleep analysis, to Health. The `value` and optional `additionalValue` strings map directly to Shortcuts' Health category picker values.

```
enum healthCategorySampleType {
    'Bladder Incontinence',
    'Constipation',
    'Acne',
    'Sleep Analysis',
    'Mindful Session',
}

logHealthCategorySample(healthCategorySampleType sampleType, text value, text ?additionalValue, variable ?startDate, variable ?endDate)
```

**Example Usage**

```ruby
logHealthCategorySample("Acne", "Present", nil, CurrentDate, CurrentDate)
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

const steps = logHealthQuantitySample(qty(20, "count"), "Steps", CurrentDate)
findHealthSamples(steps)
```

---

### Get Details of Health Sample

Get a detail from a Health sample returned by a Health action.

```
getHealthSampleDetail(variable sample, text detail)
```

**Example Usage**

```ruby
#include 'actions/health'

const steps = logHealthQuantitySample(qty(20, "count"), "Steps", CurrentDate)
getHealthSampleDetail(steps, "Value")
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

### Open Health Category

Open a Health category.

```
openHealthCategory(text identifier, text ?title, text ?symbol)
```

**Example Usage**

```ruby
openHealthCategory("HKDisplayCategoryIdentifier_13", "Respiratory", "lungs.fill")
```

---

### Open Health Records

Open a records section in Health.

```
openHealthRecords(text identifier, text ?title, text ?symbol)
```

**Example Usage**

```ruby
openHealthRecords("labs", "Lab Results", "cross.case.fill")
```

---

### Search in Health

Open Health and search for text.

```
openHealthSearch(text query)
```

**Example Usage**

```ruby
openHealthSearch("steps")
```

---

### Open Sleep Schedule

Open the sleep schedule in Health.

```
openSleepSchedule()
openSleepScheduleLegacy()
```

**Example Usage**

```ruby
openSleepSchedule()
```

---

### Open Health Tab

Open a tab in Health.

```
openHealthTab(text identifier, text ?title, text ?symbol)
```

**Example Usage**

```ruby
openHealthTab("summary", "Summary", "heart.text.square")
```

---

### Log Workout

Log a workout to Health.

```
logWorkout(text workoutType, #healthQuantityUnit (qty)?calories, variable ?date, #healthQuantityUnit (qty)?duration, #healthQuantityUnit (qty)?distance)
```

**Example Usage**

```ruby
logWorkout("Basketball", qty(500, "Cal"))
logWorkout("Basketball", qty(500, "Cal"), CurrentDate, qty(30, "min"), qty(1, "km"))
```

---

## Activity

### Get Physical Activity

Get the current physical activity detected by the system.

```
getPhysicalActivity(): text
```

The result is one of `Unknown`, `Stationary`, `Walking`, `Running`, `Cycling`, `In a Stationary Vehicle`, `In a Moving Vehicle`, or `Moving`.

**Example Usage**

```ruby
getPhysicalActivity()
```
