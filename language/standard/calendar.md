---
title: Calendar
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 1
---

# Calendar Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Calendars

### Add Calendar

Create a calendar with `name`.

```
addCalendar(text name)
```

## Dates

### Date

Create date value from `date`.

```
date(text date)
```

#### Example Usage

```
date("October 5, 2022")
```

---

### Add to Date

Add to date by units of time.

```
addSeconds(text date, integer magnitude)
addMinutes(text date, integer magnitude)
addHours(text date, integer magnitude)
addDays(text date, integer magnitude)
addWeeks(text date, integer magnitude)
addMonths(text date, integer magnitude)
addYears(text date, integer magnitude)
```

---

### Subtract from Date

Subtract from the date by units of time.

```
subtractSeconds(text date, integer magnitude)
subtractMinutes(text date, integer magnitude)
subtractHours(text date, integer magnitude)
subtractDays(text date, integer magnitude)
subtractWeeks(text date, integer magnitude)
subtractMonths(text date, integer magnitude)
subtractYears(text date, integer magnitude)
```

---

### Get Starting Time

Get various starting units of date.

```
getStartMinute(text date)
getStartHour(text date)
getStartWeek(text date)
getStartMonth(text date)
getStartYear(text date)
```
