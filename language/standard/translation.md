---
title: Translation
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 21
---

# Translation Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

### Languages

| Code 	| Language 	|
|:------|:----------|
| `ar_AE` | Arabic |
| `zh_CN` | Mandarin Chinese (Mainland) |
| `zh_TW` | Mandarin Chinese (Taiwan) |
| `nl_NL` | Dutch |
| `en_GB` | English (UK) |
| `en_US` | English (US) |
| `fr_FR` | French |
| `de_DE` | German |
| `id_ID` | Indonesian |
| `it_IT` | Italian |
| `jp_JP` | Japanese |
| `ko_KR` | Korean |
| `pl_PL` | Polish |
| `pt_BR` | Portuguese (Brazil) |
| `ru_RU` | Russian |
| `es_ES` | Spanish (Spain) |
| `th_TH` | Thai |
| `tr_TR` | Turkish |
| `vn_VN` | Vietnamese | 

---

### Detect Language

Detect the language of the text in `input`.

```
detectLanguage(text input): text
```

---

### Translate

Translate text.

```
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

translate(text text, language to, language ?from = "Detected language"): text
```
