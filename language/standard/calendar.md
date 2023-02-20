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

```ruby
addCalendar(name)
```

## Dates

### Date

Create date value from `date`.

```ruby
date(date)
```

---

### Add to Date

Add to date by units of time.

```ruby
addSeconds(date,magnitude)
addMinutes(date,magnitude)
addHours(date,magnitude)
addDays(date,magnitude)
addWeeks(date,magnitude)
addMonths(date,magnitude)
addYears(date,magnitude)
```

---

### Subtract from Date

Subtract from date by units of time.

```ruby
subtractSeconds(date,magnitude)
subtractMinutes(date,magnitude)
subtractHours(date,magnitude)
subtractDays(date,magnitude)
subtractWeeks(date,magnitude)
subtractMonths(date,magnitude)
subtractYears(date,magnitude)
```

---

### Get Starting Time

Get various starting units of date.

```ruby
getStartMinute(date)
getStartHour(date)
getStartWeek(date)
getStartMonth(date)
getStartYear(date)
```
