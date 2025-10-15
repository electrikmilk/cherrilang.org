---
title: Scale Your Siri Shortcut Projects
nav_exclude: true
layout: home
nav_order: 1
---

<div class="hero">
    <br/>
    <img src="/assets/cherri_icon.png" width="128" height="128" alt="Cherri Hero Image"/>
    <h1>Scale your Shortcut projects and maintain them long-term.</h1>
    <p style="color: #959396"><strong>Cherri</strong> (pronounced cherry) is a <a href="https://apps.apple.com/us/app/shortcuts/id1462947752" ref="noreferrer noopener" target="_blank">Siri Shortcuts</a> programming language that compiles directly to a signed Shortcut you can then run on your Apple devices.</p>
    <span class="fs-6">
    <a href="https://playground.cherrilang.org" target="_blank" class="btn btn-red btn-outline hero-button">Try Cherri</a>
    </span>
</div>

```ruby
/* Hello, Cherri! */

#define glyph smileyFace
#define color yellow

@message = "Hello!"
alert("Message: {message}", "Alert")
```

## Why Cherri?

<div class="box" markdown="1">
- 🖥️ Laptop/Desktop based development
- 🎓 Easy to learn and syntax similar to other languages
- 🐞 1-1 translation to Shortcut actions as much as possible to make debugging easier
- 🪶 Optimized to create as small as possible Shortcuts and reduces memory usage at runtime

<br/>

<span class="fs-5">
[Read Documentation](/language){: .btn }
[Install](/install){: .btn .btn-red }
</span>
</div>

<div class="box" markdown="1">
    
## VS Code Extension
Provides syntax highlighting and file icon.

<br/>

<a href="https://marketplace.visualstudio.com/items?itemName=electrikmilk.cherri-vscode-extension" target="_blank" class="btn btn-red">Install VS Code Extension</a>

</div>

<div class="box" markdown="1">

## macOS App

You can build and run the Xcode project locally.

<br/>

<a href="https://github.com/electrikmilk/cherri-macos-app" target="_blank" class="btn btn-red">View Source on GitHub</a>

</div>

<div class="box" markdown="1">

## Glyphs Search

Use the glyphs search site to easily generate a Shortcut icon for Cherri outside of Shortcuts.

<br/>

<a href="https://glyphs.cherrilang.org" target="_blank" class="btn btn-red">Generate Your Shortcut Icon</a>

</div>

## How does it work?

### 🪄 No magic variables syntax, they're constants instead

```ruby
const int = 37
show("{int}")
```

[Learn more](language/variables-constants-globals#constants){: .btn }

### #️⃣ Include files within others for large Shortcut projects

```
#include 'other-file.cherri'
// ...
#include 'another-file.cherri'
```

[Learn more](language/includes){: .btn }

### 🔧 Define custom actions

```
#include 'actions/scripting'

action myCustomAction(text test) {
    show("{test}")
}

myCustomAction("Test")
```

[Learn more](language/custom-actions){: .btn }

### 📋 Copy-paste actions automatically

```ruby
#include 'actions/network'

copy checkConnection {
    const online = isOnline()
    if !online {
        alert("No internet connection!")
    }
}

// ...

paste checkConnection
```

[Learn more](language/copy-paste){: .btn }

### 🥩 Define raw actions with a custom identifier and parameters

```ruby
rawAction("is.workflow.actions.gettext", {
     "WFTextActionText": "Hello, world!"
})
```

[Learn more](language/raw-actions){: .btn }

### 📇 Generate VCards for menus

Creates a text action in the VCard format based on the arguments. It also supports images.

```ruby
makeVCard("Title", "Subtitle")
```

[Learn more](language/vcards){: .btn }

### 🔢 Type system and type inference

```ruby
/* Declared types */
@string: text
@integer: number

/* Inferred types */
@txt = "Test"
@int = 37
```

[Learn more](language/types){: .btn }
