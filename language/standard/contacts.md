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

## Contacts

### Contact Details

- First Name
- Middle Name
- Last Name
- Birthday
- Prefix
- Suffix
- Nickname
- Phonetic First Name
- Phonetic Last Name
- Phonetic Middle Name
- Company
- Job Title
- Department
- File Extension
- Creation Date
- File Path
- Last Modified Date
- Name
- Random

---

### Add New Contact

Create a new contact.

```
newContact(text firstName, text lastName, text phoneNumber, text emailAddress, text company, text notes, boolean ?prompt = false)
```

---

### Edit Contact

Update `detail` of `contact` to `value`.

```
updateContact(variable contact, enum detail, text value)
```

---

### Remove Contact Detail

Remove `detail` from `contact`.

```
removeContactDetail(variable contact, enum detail)
```

---

### Filter Contacts

Filter `contacts` by `property` and sort by `sortOrder`, and limit to `limit` number of contacts.

```
filterContacts(variable contacts, enum ?sortByProperty, enum ?sortOrder = "A to Z", integer ?limit)
```

#### Sort Orders

- A to Z
- Z to A

---

### Get Detail of Contacts

Get `property` from `contact`.

```
getContactDetail(variable contact, enum property)
```

---

### Select Contact

Prompt the user to select a contact(s).

```
selectContact(boolean ?multiple = false)
```

## Phone

### Call

Call a `contact`.

```
call(variable contact)
```

---

### FaceTime Call

Facetime `type` call `contact`.

```
facetimeCall(variable contact, enum ?type = "Video")
```

#### FaceTime call types

- Video
- Audio

---

### Phone Number

Create a phone number value of `number`. No limit on `number` arguments.

```
phoneNumber(text ...number)
```

---

### Select Phone Number

Prompt the user to select a phone number.

```
selectPhoneNumber()
```

## Email

### Email Address

Create an email address value of `email`. No limit on `email` arguments.

```
emailAddress(text ...email)
```

---

### Select Email Address

Prompt the user to select an email address.

```
selectEmailAddress()
```
