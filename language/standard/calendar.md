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

## Alarms

### Create Alarm

Creates an alarm at specific time with a name, snooze allowance and applicable weekdays.

```
createAlarm(text name, text time: 'dateComponents', bool ?allowsSnooze = true, array ?repeatWeekdays)
```

---

### Delete Alarm

Deletes an alarm.

```
deleteAlarm(variable alarm: 'entities')
```

---

### Get Alarms

Returns all of the alarms on the device.

```
getAlarms()
```

---

### Toggle Alarm

Toggle an alarm.

```
toggleAlarm(variable alarm, bool ?showWhenRun: 'ShowWhenRun' = true)
```

---

### Turn Off Alarm

Turn off an alarm.

```
turnOffAlarm(variable alarm, bool ?showWhenRun: 'ShowWhenRun' = true)
```

---

### Turn Off Alarm

Turn off an alarm.

```
turnOnAlarm(variable alarm, bool ?showWhenRun: 'ShowWhenRun' = true)
```

## Calendars

### Add Calendar

Create a calendar with `name`.

```
addCalendar(text name: 'CalendarName')
```

---

### Edit Event

Edit a detail of an event. Provide an event, a detail to modify, and a new value for that detail.

```
enum editEventDetail {
    'Start Date',
    'End Date',
    'Is All Day',
    'Location',
    'Duration',
    'My Status',
    'Attendees',
    'URL',
    'Title',
    'Notes',
    'Attachments',
}

editEvent(variable event: 'WFInput', editEventDetail detail: 'WFContentItemPropertyName', text newValue: 'WFCalendarEventContentItemStartDate')
```

---

### Get Event Detail

Get a detail of an event.

```
enum eventDetail {
    'Start Date',
    'End Date',
    'Is All Day',
    'Calendar',
    'Location',
    'Has Alarms',
    'Duration',
    'Is Canceled',
    'My Status',
    'Organizer',
    'Organizer Is Me',
    'Attendees',
    'Number of Attendees',
    'URL',
    'Title',
    'Notes',
    'Attachments',
    'File Size',
    'File Extension',
    'Creation Date',
    'File Path',
    'Last Modified Date',
    'Name',
}

getEventDetail(variable event: 'WFInput', eventDetail detail: 'WFContentItemPropertyName')
```

---

### Open Event in Calendar

Show `event` in the calendar app.

```
showInCalendar(variable event: 'WFEvent')
```

---

### Remove Events

Remove an event.

```
removeEvents(variable events: 'WFInputEvents', bool ?includeFutureEvents: 'WFCalendarIncludeFutureEvents' = false)
```

## Dates

### Adjust Date

Adjust a date or get the start of a time period.

```
enum dateOperation {
    'Add',
    'Subtract',
    'Get Start of Minute',
    'Get Start of Hour',
    'Get Start of Day',
    'Get Start of Week',
    'Get Start of Month',
    'Get Start of Year',
}

enum dateUnit {
    'sec',
    'min',
    'hr',
    'days',
    'weeks',
    'months',
    'yr',
}

adjustDate(text date: 'WFDate', dateOperation operation: 'WFAdjustOperation', number ?magnitude, dateUnit ?unit)
```

---

### Current Date

Get the current date.

```
currentDate()
```

---

### Date

Create a date value from `date`. Example: October 5, 2022.

```
date(text date: 'WFDateActionDate')
```

---

### Get Dates

Get dates from input.

```
getDates(variable input: 'WFInput'): array
```

## Formatting

### Format Date

Format a date using a standard or custom format.

```
enum dateFormats {
    'None',
    'Short',
    'Medium',
    'Long',
    'Relative',
    'RFC 2822',
    'ISO 8601',
    'Custom',
}

formatDate(variable date: 'WFDate', dateFormats ?dateFormat: 'WFDateFormatStyle' = "Short", text ?customDateFormat: 'WFDateFormat')
```

---

### Format Time

Format a time using a standard or custom format.

```
enum timeFormats {
    'None',
    'Short',
    'Medium',
    'Long',
    'Relative',
}

formatTime(variable time: 'WFDate', timeFormats ?timeFormat: 'WFTimeFormatStyle' = "Short")
```

---

### Format Timestamp

Format a timestamp using standard formats and/or a custom date format.

```
enum dateFormats {
    'None',
    'Short',
    'Medium',
    'Long',
    'Relative',
    'RFC 2822',
    'ISO 8601',
    'Custom',
}

enum timeFormats {
    'None',
    'Short',
    'Medium',
    'Long',
    'Relative',
}

formatTimestamp(variable date: 'WFDate', dateFormats ?dateFormat: 'WFDateFormatStyle' = "Short", timeFormats ?timeFormat: 'WFTimeFormatStyle' = "Short", text ?customDateFormat: 'WFDateFormat')
```

## Reminders

### Open Reminders List

```
openRemindersList(variable list: 'WFList')
```

---

### Remove Reminders

```
removeReminders(variable reminders: 'WFInputReminders')
```

## Timers

### Create Timer

Creates a new timer.

```
enum timerDuration {
    'hr',
    'min',
    'sec',
}

startTimer(number magnitude, timerDuration ?unit = "min")
```

