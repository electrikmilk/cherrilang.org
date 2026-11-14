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

{: .note }
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

## QR Codes

### Make QR Code

Future release
{: .label .label-purple }

```
enum QRCodeErrorCorrection {
    'Low',
    'Medium',
    'Quartile',
    'High',
}

makeQRCode(text input, QRCodeErrorCorrection ?errorCorrection = "Medium", color ?foregroundColor = color(0.0, 0.0, 0.0, 1.0), color ?backgroundColor = color(2.0, 2.0, 2.0, 1.0))
```

---

### Scan QR or Barcode

Future release
{: .label .label-purple }

Scan a QR code or barcode using the camera.

```
scanCode(): variable
```

---

### Scan QR or Barcode in Image

Future release
{: .label .label-purple }

Scan a QR code or barcode in `image`.

```
scanCodeInImage(variable image): variable
```
