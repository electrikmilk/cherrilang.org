---
title: Contacts
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 4
---

# Contacts Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .warning }
> To use actions in this category, use this include statement:
>
> ```
> #include 'actions/contacts'
> ```

### Add New Contact

Create a new contact.

```
newContact(text firstName, text lastName, text phoneNumber, text emailAddress, text company, text notes, bool ?prompt = false)
```

---

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

filterContacts(variable contacts, contactDetail ?sortBy, abcSortOrder ?sortOrder = "A to Z", number ?limit)
```

---

### Get Contacts

Get contacts from input.

```
getContacts(variable input): array
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

getContactDetail(variable contact, contactDetail detail)
```

---

### Remove Contact Detail

Remove detail from contact.

```
enum contactDetails {
}

removeContactDetail(variable contact, contactDetails detail)
```

---

### Select Contact

Prompt the user to select a contact or multiple contacts. Returns selected contact.

```
selectContact(bool ?multiple = false)
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

updateContact(variable contact, contactDetail detail, text value)
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
getEmails(text input): array
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
call(variable contact)
```

---

### FaceTime Call

Starts a FaceTime audio or video call with the contact.

```
enum facetimeCallType {
    'Video',
    'Audio',
}

facetimeCall(variable contact, facetimeCallType ?type = "Video")
```

---

### Get Phone Numbers

Get phone numbers from input.

```
getPhoneNumbers(variable input): array
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
