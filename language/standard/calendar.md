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

### Adjust Time

- `addSeconds(date,magnitude)`
- `addMinutes(date,magnitude)`
- `addHours(date,magnitude)`
- `addDays(date,magnitude)`
- `addWeeks(date,magnitude)`
- `addMonths(date,magnitude)`
- `addYears(date,magnitude)`


- `subtractSeconds(date,magnitude)`
- `subtractMinutes(date,magnitude)`
- `subtractHours(date,magnitude)`
- `subtractDays(date,magnitude)`
- `subtractWeeks(date,magnitude)`
- `subtractMonths(date,magnitude)`
- `subtractYears(date,magnitude)`

### Get Starting Time

- `getStartMinute(date)`
- `getStartHour(date)`
- `getStartWeek(date)`
- `getStartMonth(date)`
- `getStartYear(date)`
