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

---

### Open Event in Calendar

```
showInCalendar(variable event)
```

---

### Edit Event

Edit a detail of an event. Provide an event, a detail to modify, and a new value for that detail.

```
editEvent(variable event, enum detail, text newValue)
```

#### Event Details

- Start Date
- End Date
- Is All Day
- Location
- Duration
- My Status
- Attendees
- URL
- Title
- Notes
- Attachments

_**Note:** Enum values are case-sensitive._

---

### Get Event Detail

Get a detail of an event.

```
getEventDetail(variable event, enum detail)
```

Details

- Start Date
- End Date
- Is All Day
- Calendar
- Location
- Has Alarms
- Duration
- Is Canceled
- My Status
- Organizer
- Organizer Is Me
- Attendees
- Number of Attendees
- URL
- Title
- Notes
- Attachments
- File Size
- File Extension
- Creation Date
- File Path
- Last Modified Date
- Name

_**Note:** Enum values are case-sensitive._

---

### Remove Events

```
removeEvents(variable events, bool ?includeFutureEvents = false)
```

## Reminders

### Open Reminders List

```
openRemindersList(variable list)
```

---

### Remove Reminders

```
removeReminders(variable reminders)
```

## Alarms

### Get Alarms

Returns all of the alarms on the device.

```
getAlarms()
```

---

### Create Alarm

Create an alarm.

```
createAlarm(text name, text time, bool ?allowsSnooze = true, array ?repeatWeekdays)
```

Weekdays for `repeatWeekdays` are case insensitive.

---

### Turn On Alarm

Turn on an alarm.

```
turnOnAlarm(variable alarm)
```

---

### Turn Off Alarm

Turn off an alarm.

```
turnOffAlarm(variable alarm)
```

---

### Toggle Alarm

Toggle an alarm on or off depending on current state.

```
toggleAlarm(variable alarm)
```

---

### Delete Alarm

Delete an alarm

```
deleteAlarm(variable alarm)
```

## Clock

### Create Timer

Start a timer.

```
startTimer(number magnitude, enum ?unit = "min")
```

#### Available units:

- hr
- min
- sec

_**Note:** Enum values are case-sensitive._

## Dates

### Current Date

Create a date value with the current date.

```
currentDate()
```

---

### Specific Date

Create a date value from `date`.

```
date(text date)
```

**Example Usage**

```ruby
date("October 5, 2022")
```

---

### Get Dates

Get dates from value.

```
getDates(variable input)
```

---

### Add to Date

Add to a date by units of time.

```
addSeconds(text date, number magnitude)
addMinutes(text date, number magnitude)
addHours(text date, number magnitude)
addDays(text date, number magnitude)
addWeeks(text date, number magnitude)
addMonths(text date, number magnitude)
addYears(text date, number magnitude)
```

---

### Subtract from Date

Subtract from the date by units of time.

```
subtractSeconds(text date, number magnitude)
subtractMinutes(text date, number magnitude)
subtractHours(text date, number magnitude)
subtractDays(text date, number magnitude)
subtractWeeks(text date, number magnitude)
subtractMonths(text date, number magnitude)
subtractYears(text date, number magnitude)
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

---

### Format Date

```
formatDate(variable date, enum ?dateFormat = "Short")
```

#### Date Formats

- None
- Short
- Medium
- Long
- Relative
- RFC 2822
- ISO 8601
- Custom

_**Note:** Enum values are case-sensitive._

---

### Format Time

```
formatTime(variable time, enum ?timeFormat = "Short")
```

#### Time Formats

- None
- Short
- Medium
- Long
- Relative

_**Note:** Enum values are case-sensitive._

---

### Format Timestamp

```
formatTimestamp(variable date, enum ?dateFormat = "Short", enum ?timeFormat = "Short")
```
