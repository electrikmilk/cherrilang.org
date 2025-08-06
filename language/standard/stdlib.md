---
title: Standard Library
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 24
---

# Standard Library of Custom Actions

You can use the Cherri Standard Library of [custom actions](/language/custom-actions) using the following syntax:

```
#include 'stdlib'
```

This will give you access to the following actions. Note that custom actions are only included with your Shortcut if you use them.

## Scripting

### Choose from vCard

Prompt the user to choose from an array of [vCards](/language/vcards) with a prompt. Returns the chosen vCard item.

```
chooseFromVCard(array items, text prompt)
```

**Example Usage**

```ruby
#include 'stdlib'

#include 'actions/scripting'
#include 'actions/text'
#include 'actions/web'

@items = []
repeat i for 3 {
  @items += makeVCard("Title", "Subtitle")
}

chooseFromVCard(items, "Choose From Items")
```

---

### Run JavaScript

Runs the JavaScript code in `script` and returns the output.

```
runJS(text script)
```

**Basic Usage**

```ruby
#include 'stdlib'

#include 'actions/scripting'
#include 'actions/text'
#include 'actions/web'

const jsonStr = '{\"name\": \"John\", \"age\": 30\}'

const code = "
    const json = JSON.parse('{jsonStr}')
    document.body.append(document.createTextNode(json.name));
"

const jsResult = runJS(code)

show(jsResult)
```

You can also use [`base64File()`](/language/standard/builtin#base64-encode-file) to encode a large JS file into your Shortcut without needing to paste it.

`index.js`
```
function output(output) {
    const text = document.createElement('div');
    text.innerText = output;
    document.body.appendChild(text);
}

output('Hello, World!');
```

`js.cherri`
```
#include 'stdlib'

const jsFile = base64File("path/to/index.js")
const jsCode = base64Decode(jsFile)

@result = runJS(jsCode)

show(result)
```
