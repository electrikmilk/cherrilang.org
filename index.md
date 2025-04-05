---
title: Scale Your Siri Shortcut Projects
nav_exclude: true
layout: home
nav_order: 1
---

<div class="hero">
    <img src="/assets/hero.png" width="500" height="250" alt="Cherri Hero Image"/>
    <h1>Scale your Shortcut projects and maintain them long-term.</h1>
    <p style="color: #959396"><strong>Cherri</strong> (pronounced cherry) is a <a href="https://apps.apple.com/us/app/shortcuts/id1462947752" ref="noreferrer noopener" target="_blank">Siri Shortcuts</a> programming language that compiles directly to a signed Shortcut you can then run on your Apple devices.</p>
    <span class="fs-6">
    <a href="https://playground.cherrilang.org" target="_blank" class="btn btn-red btn-outline hero-button">Try Cherri</a>
    </span>
</div>

<br/>

```ruby
/* Hello, Cherri! */

#define glyph smileyFace
#define color yellow

@message = "Hello!"
alert("Message: {message}", "Alert")
```

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
## Why Cherri?

- ### 🎓 Easy to learn and syntax similar to other languages
- ### 🐞 1-1 translation to Shortcut actions as much as possible to make debugging easier
- ### ❓ Define import questions
- ### 🪶 Optimized to create as small as possible Shortcuts and reduces memory usage at runtime
- ### 📄 Embed files in base64

<span class="fs-5">
[Read Documentation](/language){: .btn }
[Install](/install){: .btn .btn-red }
</span>
</div>

## 🪄 No magic variables syntax, they're constants instead

```ruby
const int = 37
show("{int}")
```

[Learn more](language/variables-constants-globals#constants){: .btn }

## #️⃣ Include files within others for large Shortcut projects

```
#include 'other-file.cherri'
// ...
#include 'another-file.cherri'
```

[Learn more](language/includes){: .btn }

## 🔧 Define custom actions

```ruby
action myCustomAction(text test) {
    show("{test}")
}

myCustomAction("Test")
```

[Learn more](language/custom-actions){: .btn }

## 📋 Copy-paste actions automatically

```ruby
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

## 🥩 Define raw actions with custom identifier and parameters

```ruby
rawAction("is.workflow.actions.gettext", [
      {
          "key": "WFTextActionText",
          "type": "string",
          "value": "Hello, world!"
      }
])
```

[Learn more](language/raw-actions){: .btn }

## 📇 Generate VCards for menus

Creates a text action in the VCard format based on the arguments.

```ruby
makeVCard("Title", "Subtitle")
```

[Learn more](language/vcards){: .btn }

## 🔢 Type system and type inference

```ruby
// Declared types
@string: text
@integer: number

// Inferred types
@txt = "Test"
@int = 37
```

[Learn more](language/types){: .btn }
