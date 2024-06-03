---
title: Actions
layout: default
parent: Documentation
has_children: true
nav_order: 1
---

# Actions

Actions in Cherri are intended to be easier to use, as in some cases, single actions have been split up into multiple
actions to reduce the number of arguments and complexity. Some arguments are optional and some are required.

## Standard Actions

These are the standard Shortcuts actions currently supported. Currently, more are being added all the time so this list
may be inaccurate. Not all standard actions in each category are implemented yet, Scripting is the most complete.

Standard actions are always available and do not need to be imported.

- [Calendar](standard/calendar) `12/30`
- [Contacts](standard/contacts)
- [Documents](standard/documents)
- [Location](standard/location)
- [Media](standard/media) `35/68`
- [Scripting](standard/scripting)
- [Sharing](standard/sharing)
- [Web](standard/web)

Some actions may not be implemented due to difficulty implementing them practically into the language.

[Please report incomplete or non-working actions](https://github.com/electrikmilk/cherri/issues)

## Built-in Customized Standard Actions

Built-ins in Cherri are actions in the compiler that use standard actions but implement them in a way that makes it easier to use a specific Shortcuts feature. For example, the [makeVCard()](/language/vcards) action is in actuality just a text action. Still, the compiler uses it to  insert the vCard format into a text action based on your input.

[Customized standard actions](standard/custom)

## Can I contribute actions, even non-standard actions?

Yes, it's not very hard!

[Learn more about contributing actions](/compiler/actions)
