---
title: Enums
layout: default
parent: Documentation
nav_order: 6
---

# Enums
{: .no_toc }

Enums define a named set of accepted string values for use in action parameters.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Syntax

```
enum typeName {
    'Option1',
    'Option2',
}
```

Each value is a quoted string. A trailing comma after the last value is allowed.

## Using enums in action definitions

Enums are used as parameter types in [action definitions](/language/action-definitions). When an action parameter has an enum type, only the declared values are accepted.

```
enum hashAlgorithm {
    'MD5',
    'SHA1',
    'SHA256',
    'SHA512',
}

action 'is.workflow.actions.hash' hash(variable input, hashAlgorithm ?algorithm = "MD5")
```

Calling the action with an enum value:

```ruby
#include 'actions/crypto'

const result = hash(@input, "SHA256")
```

## Standard library enums

The standard library action pages show the enum definition inline alongside each action that uses one. These enums are defined inside the Cherri compiler - you do not need to define them yourself when using standard library actions.

For example, from the [Crypto](/language/standard/crypto) page:

```
enum hashAlgorithm {
    'MD5',
    'SHA1',
    'SHA256',
    'SHA512',
}

hash(variable input, hashAlgorithm ?algorithm = "MD5")
```

When calling `hash()`, pass one of the declared string values as the argument.
