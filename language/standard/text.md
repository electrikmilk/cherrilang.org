---
title: Text
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 17
---

# Text Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

### Define

Returns the definition of the word.

```
define(text word): text
```

---

### Dictation

Transcribes user recorded audio to text, optionally in another language.

```
enum stopListeningTrigger {
    'After Pause',
    'After Short Pause',
    'On Tap',
}

enum language {
    'ar_AE',
    'zh_CN',
    'zh_TW',
    'nl_NL',
    'en_GB',
    'en_US',
    'fr_FR',
    'de_DE',
    'id_ID',
    'it_IT',
    'jp_JP',
    'ko_KR',
    'pl_PL',
    'pt_BR',
    'ru_RU',
    'es_ES',
    'th_TH',
    'tr_TR',
    'vn_VN',
}

listen(stopListeningTrigger ?stopListening = "After Pause", language ?language): text
```

---

### Get Name of Emoji

Detects emoji in the text and returns its name.

```
getEmojiName(text emoji): text
```

---

### Get Text

Get text from input.

```
getText(variable input): text
```

---

### Get Text from Image

```
getTextFromImage(variable image): text
```

---

### Make Spoken Audio

Creates custom spoken audio from text with controls for rate and pitch.

```
makeSpokenAudio(text text, number ?rate, number ?pitch)
```

---

### Speak

Speaks the provided text, optionally in another language.

```
speak(text prompt, bool ?waitUntilFinished = true, text ?language)
```

---

### Transcribe Audio

Transcribes text from the provided audio.

```
transcribeText(variable audio): text
```

## Regular Expressions

### Get Match Group

Get match group at `index` in `matches`.

```
getMatchGroup(variable matches, number index)
```

---

### Get Match Groups

Get all groups in `matches`.

```
getMatchGroups(variable matches)
```

---

### Match Text

Use regular expressions to match text.

```
matchText(text regexPattern, text text, bool ?caseSensitive = true)
```

## Rich Text

### Get Rich Text from Markdown

```
getRichTextFromMarkdown(text markdown): text
```

---

### Make HTML

Make HTML from Rich Text.

```
makeHTML(text input, bool ?makeFullDocument = false): text
```

---

### Make Markdown

Make Markdown from Rich Text.

```
makeMarkdown(text richText): text
```

---

### Make Rich Text from HTML

```
getRichTextFromHTML(text html): text
```

## Text Editing

### Alternating Case

Capitalizes the text with alternating case.

```
alternatingCase(text text): text
```

---

### Capitalize

Capitalizes the text with sentence case.

```
capitalize(text text): text
```

---

### Capitalize All

Capitalizes every word in the text.

```
capitalizeAll(text text): text
```

---

### Contains Text

Uses Match Text to check if text is within subject.

```
containsText(text subject, text text, bool ?caseSensitive = true)
```

---

### Correct Spelling

Corrects the spelling of the provided text.

```
correctSpelling(text text): text
```

---

### Join Text

Join text by a combiner.

```
joinText(variable text, text ?glue = "\n"): text
```

---

### Lowercase

Transforms the text to all lowercase.

```
lowercase(text text): text
```

---

### Replace Text

Replace `find` in `subject`, optionally using a regular expression or case insensitive search.

```
replaceText(text find, text replacement, text subject, bool ?caseSensitive = true, bool ?regExp = false): text
```

---

### Split Text

Split text by a separator.

```
splitText(text text, text ?separator = "\n"): array
```

---

### Title Case

Capitalizes the text with Title Case.

```
titleCase(text text): text
```

---

### Uppercase

Transforms the text to all uppercase.

```
uppercase(text text): text
```
