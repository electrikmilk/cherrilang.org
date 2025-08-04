---
title: Cryptography
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 5
---

# Cryptography Actions
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
> #include 'actions/crypto'
> ```

### Base 64 Decode

Base 64 decodes input.

```
base64Decode(variable input): text
```

---

### Base 64 Encode

Base 64 encodes input.

```
base64Encode(variable encodeInput): text
```

---

### Hash

Generate a hash of type using input.

```
enum hashType {
    'MD5',
    'SHA1',
    'SHA256',
    'SHA512',
}

hash(variable input, hashType ?type = "MD5"): text
```
