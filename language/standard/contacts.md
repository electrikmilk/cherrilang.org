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

### Get Contact Detail

Get `property` from `contact`.

```
getContactDetail(variable contact, enum property)
```

#### Contact Properties

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

### Filter Contacts

Filter `contacts` by `property` and sort by `sortOrder`, and limit to `limit` number of contacts.

```
filterContacts(variable contacts, enum ?sortByProperty, enum ?sortOrder = "A to Z", integer ?limit)
```

#### Sort Orders

- A to Z
- Z to A

---

### Select Contact

Prompt the user to select contact(s).

```
selectContact(boolean ?multiple = false)
```

## Phone

### Phone Number

Create a phone number value of `number`. No limit on `number` arguments.

```
phoneNumber(string ...number)
```

---

### Select Phone Number

Prompt the user to select a phone number.

```
selectPhoneNumber()
```

## Email

### Email Address

Create email address value of `email`. No limit on `email` arguments.

```
emailAddress(string ...email)
```

---

### Select Email Address

Prompt the user to select an email address.

```
selectEmailAddress()
```
