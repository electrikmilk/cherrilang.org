---
title: Calendar
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 3
---

# Calendar Actions
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
> #include 'actions/calendar'
> ```

## Alarms

### Create Alarm

Creates an alarm at a specific time with a name, snooze allowance, and applicable weekdays.

```
createAlarm(text name, text time, bool ?allowsSnooze = true, array ?repeatWeekdays)
```

---

### Delete Alarm

Deletes an alarm.

```
deleteAlarm(variable alarm)
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
toggleAlarm(variable alarm, bool ?showWhenRun = true)
```

---

### Turn Off Alarm

Turn off an alarm.

```
turnOffAlarm(variable alarm, bool ?showWhenRun = true)
```

---

### Turn On Alarm

Turn on an alarm.

```
turnOnAlarm(variable alarm, bool ?showWhenRun = true)
```

## Calendars

### Add Calendar

Create a calendar with `name`.

```
addCalendar(text name)
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

editEvent(variable event, editEventDetail detail, text newValue)
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

getEventDetail(variable event, eventDetail detail)
```

---

### Open Event in Calendar

Show `event` in the calendar app.

```
showInCalendar(variable event)
```

---

### Remove Events

Remove an event.

```
removeEvents(variable events, bool ?includeFutureEvents = false)
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

adjustDate(text date, dateOperation operation, number ?magnitude, dateUnit ?unit)
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
date(text date)
```

---

### Get Dates

Get dates from input.

```
getDates(variable input): array
```

---

### Get Holiday Date

Get the date of a holiday, optionally specifically for a few past or future years.

```
enum holiday {
    'April Fools' Day',
    'Ash Wednesday',
    'Christmas Day',
    'Christmas Eve',
    'Cinco de Mayo',
    'Columbus Day',
    'Day of the Dead',
    'Daylight Saving Time',
    'Daylight Saving Time End',
    'Diwali',
    'Earth Day',
    'Easter Sunday',
    'Eid al-Adha',
    'Eid al-Fitr',
    'Election Day',
    'Father's Day',
    'First Night of Ramadan',
    'Flag Day',
    'Good Friday',
    'Groundhog Day',
    'Halloween',
    'Holi',
    'Inauguration Day',
    'Independence Day',
    'Indigenous Peoples' Day',
    'Juneteenth',
    'Martin Luther King Jr. Day',
    'Memorial Day',
    'Mother's Day',
    'New Year's Day',
    'New Year's Eve',
    'Palm Sunday',
    'Presidents' Day',
    'St. Patrick's Day',
    'Tax Day',
    'Thanksgiving',
    'Valentine's Day',
    'Veterans Day',
    'Workers' Day',
}

enum eventOccurrenceMode {
    'Next Occurrence',
    'Specified Year',
}

enum holidayYear {
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
}

getHolidayDate(holiday holiday, eventOccurrenceMode ?occurrenceMode = "Next Occurrence", holidayYear ?forYear): text
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

formatDate(text date, dateFormats ?dateFormat = "Short", text ?customDateFormat)
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

formatTime(text time, timeFormats ?timeFormat = "Short")
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

formatTimestamp(text date, dateFormats ?dateFormat = "Short", timeFormats ?timeFormat = "Short", text ?customDateFormat)
```

## Reminders

### Add Quick Reminder

```
addQuickReminder()
```

---

### Open Reminders List

```
openRemindersList(variable list)
```

---

### Remove Reminders

```
removeReminders(variable reminders)
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

