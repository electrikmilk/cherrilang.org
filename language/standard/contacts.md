---
title: Contacts
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 2
---

# Contacts Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

### Filter Contacts

```
enum contactDetail {
    'First Name',
    'Middle Name',
    'Last Name',
    'Birthday',
    'Prefix',
    'Suffix',
    'Nickname',
    'Phonetic First Name',
    'Phonetic Last Name',
    'Phonetic Middle Name',
    'Company',
    'Job Title',
    'Department',
    'File Extension',
    'Creation Date',
    'File Path',
    'Last Modified Date',
    'Name',
    'Random',
}

enum abcSortOrder {
    'A to Z',
    'Z to A',
}

filterContacts(variable contacts: 'WFContentItemInputParameter', contactDetail ?sortBy: 'WFContentItemSortProperty', abcSortOrder ?sortOrder: 'WFContentItemSortOrder' = "A to Z", number ?limit: 'WFContentItemLimitNumber')
```

---

### Get Contacts

Get contacts from input.

```
getContacts(variable input: 'WFInput'): array
```

---

### Get Detail of Contact

Get a detail about a contact.

```
enum contactDetail {
    'First Name',
    'Middle Name',
    'Last Name',
    'Birthday',
    'Prefix',
    'Suffix',
    'Nickname',
    'Phonetic First Name',
    'Phonetic Last Name',
    'Phonetic Middle Name',
    'Company',
    'Job Title',
    'Department',
    'File Extension',
    'Creation Date',
    'File Path',
    'Last Modified Date',
    'Name',
    'Random',
}

getContactDetail(variable contact: 'WFInput', contactDetail detail: 'WFContentItemPropertyName')
```

---

### Select Contact

Prompt the user to select a contact or multiple contacts. Returns selected contact.

```
selectContact(bool ?multiple: 'WFSelectMultiple' = false)
```

---

### Update Contact

```
enum contactDetail {
    'First Name',
    'Middle Name',
    'Last Name',
    'Birthday',
    'Prefix',
    'Suffix',
    'Nickname',
    'Phonetic First Name',
    'Phonetic Last Name',
    'Phonetic Middle Name',
    'Company',
    'Job Title',
    'Department',
    'File Extension',
    'Creation Date',
    'File Path',
    'Last Modified Date',
    'Name',
    'Random',
}

updateContact(variable contact: 'WFInput', contactDetail detail: 'WFContentItemPropertyName', text value)
```

## Contacts

### Add New Contact

Create a new contact.

```
newContact(text firstName: 'WFContactFirstName', text lastName: 'WFContactLastName', text phoneNumber, text emailAddress, text company: 'WFContactCompany', text notes: 'WFContactNotes', bool ?prompt: 'ShowWhenRun' = false)
```

---

### Remove Contact Detail

Remove detail from contact.

```
enum contactDetails {
}

removeContactDetail(variable contact: 'WFInput', contactDetails detail: 'WFContentItemPropertyName')
```

## Email

### Email Address

Create an email address value.

```
emailAddress(text ...email)
```

---

### Get Emails

Get emails from input.

```
getEmails(text input: 'WFInput'): array
```

---

### Select Email Address

Prompt the user to select an email address from their contacts.

```
selectEmailAddress()
```

## Phone

### Call

Call a contact.

```
call(variable contact: 'WFCallContact')
```

---

### FaceTime Call

Starts a FaceTime audio or video call with the contact.

```
enum facetimeCallType {
    'Video',
    'Audio',
}

facetimeCall(variable contact: 'WFFaceTimeContact', facetimeCallType ?type: 'WFFaceTimeType' = "Video")
```

---

### Get Phone Numbers

Get phone numbers from input.

```
getPhoneNumbers(variable input: 'WFInput'): array
```

---

### Phone Number

Create a phone number value.

```
phoneNumber(text ...number)
```

---

### Select Phone Number

Prompt the user to select a phone number from their contacts.

```
selectPhoneNumber()
```
