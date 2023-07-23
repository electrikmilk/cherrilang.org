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
addCalendar(string name)
```

## Dates

### Date

Create date value from `date`.

```
date(string date)
```

#### Example Usage

```
date("October 5, 2022")
```

---

### Add to Date

Add to date by units of time.

```
addSeconds(string date, integer magnitude)
addMinutes(string date, integer magnitude)
addHours(string date, integer magnitude)
addDays(string date, integer magnitude)
addWeeks(string date, integer magnitude)
addMonths(string date, integer magnitude)
addYears(string date, integer magnitude)
```

---

### Subtract from Date

Subtract from the date by units of time.

```
subtractSeconds(string date, integer magnitude)
subtractMinutes(string date, integer magnitude)
subtractHours(string date, integer magnitude)
subtractDays(string date, integer magnitude)
subtractWeeks(string date, integer magnitude)
subtractMonths(string date, integer magnitude)
subtractYears(string date, integer magnitude)
```

---

### Get Starting Time

Get various starting units of date.

```
getStartMinute(string date)
getStartHour(string date)
getStartWeek(string date)
getStartMonth(string date)
getStartYear(string date)
```
