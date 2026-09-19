---
title: Automations
layout: default
parent: Documentation
nav_order: 16
---

# Automations
{: .no_toc }

Future release
{: .label .label-purple }

{: .warning }
This syntax only applies to devices running Apple platforms (iOS, macOS, etc.) version 27 or greater.

Define personal automation triggers so your Shortcut runs on its own, without needing to configure the automation manually in the Shortcuts app.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Syntax

```
#trigger identifier value
```

| Part | Description |
|---|---|
| `identifier` | The trigger type. See [Trigger Types](#trigger-types) below. |
| `value` | The parameter for that trigger. Its format depends on `identifier`. |

Add more than one `#trigger` directive to fire the automation from multiple events.

```ruby
#trigger wifi joined
#trigger bluetooth connect

alert("Connected")
```

## Trigger types

### Screenshot

Fires when a screenshot is taken. `value` is a comma-separated list of where the screenshot is saved.

- `photos`
- `files`
- `clipboard`

```ruby
#trigger screenshot photos, files

alert("Screenshot taken")
```

### Battery level

Fires when the battery reaches a given percentage. `value` is a whole number.

```ruby
#trigger battery 30

alert("Battery is at 30%")
```

### Stage manager

Fires when Stage Manager is toggled. `value` is one of:

- `on`
- `off`
- `both`

```ruby
#trigger stageManager on

alert("Stage Manager turned on")
```

### Wi-Fi

Fires when the device joins or disconnects from a Wi-Fi network. `value` is one of:

- `joined`
- `disconnected`
- `both`

```ruby
#trigger wifi joined

alert("Joined a Wi-Fi network")
```

### Bluetooth

Fires when a Bluetooth device connects or disconnects. `value` is one of:

- `connect`
- `disconnect`
- `both`

```ruby
#trigger bluetooth connect

alert("Bluetooth device connected")
```

### External display

Fires when an external display connects or disconnects. `value` is one of:

- `connect`
- `disconnect`
- `both`

```ruby
#trigger display connect

alert("External display connected")
```

### Charging

Fires when the device starts or stops charging. `value` is one of:

- `connect`
- `disconnect`
- `both`

```ruby
#trigger charging connect

alert("Started charging")
```

### App

Fires when the given app is opened or brought into focus. `value` is an app name (e.g. `safari`) or a full bundle identifier (e.g. `com.apple.mobilesafari`).

```ruby
#trigger app safari

alert("Safari opened")
```
