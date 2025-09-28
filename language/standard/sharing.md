---
title: Sharing
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 18
---

# Sharing Actions
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
> #include 'actions/sharing'
> ```

### Share

Prompt the user to share `input`.

```
share(variable input)
```

## AirDrop

### AirDrop

Prompt the user to AirDrop `input`.

```
airdrop(variable input)
```

---

### Set AirDrop Receiving

Set the AirDrop receiving setting.

```
enum airdropReceivingStates {
    'No One',
    'Contacts Only',
    'Everyone',
}

setAirdropReceiving(airdropReceivingStates ?state = "Everyone")
```

## Clipboard

### Get Clipboard

Get the contents of the clipboard.

```
getClipboard()
```

---

### Set Clipboard

Set the contents of the clipboard.

```
setClipboard(variable value, bool ?local = false, text ?expire)
```

## Email & SMS Messaging

### Find Conversation

Find SMS/iMessage conversation.

```
findConversation(text search)
```

---

### Find Email

Find email.

```
findEmail(text search)
```

---

### Find Message

Find SMS/iMessage message.

```
findMessage(text search)
```

---

### Send Email

Send an email to a contact.

```
sendEmail(variable contact, text from, text subject, text body, bool ?prompt = true, bool ?draft = false)
```

---

### Send Message

Send an SMS/iMessage to a contact.

```
sendMessage(variable contact, text message, bool ?prompt = true)
```
