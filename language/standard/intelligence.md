---
title: Apple Intelligence
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 2
---

# Apple Intelligence Actions
{: .no_toc }

Future release
{: .label .label-purple }

{: .warning }
> These actions will only run on devices that support Apple Intelligence.
> The output of Apple Intelligence actions may be unpredictable.
> Ensure any hard-coded prompts are not overly complex and iteratively test that their output is relatively consistent with what you expect.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .warning }
> To use actions in this category, use this include statement:
>
> ```
> #include 'actions/intelligence'
> ```

## Image Playground

### Create Image using Image Playground

Generate an Image with a prompt using the Image Playground app.

```
enum imagePlaygroundStyle {
    'animation',
    'illustration',
    'sketch',
    'chatgpt',
    'chatgpt_oil_painting',
    'chatgpt_watercolor',
    'chatgpt_vector',
    'chatgpt_anime',
    'chatgpt_print',
}

enum saveToPlaygroundBehavior {
    'always',
    'askWhenRun',
    'never',
}

generateImage(text prompt, variable ?image, imagePlaygroundStyle ?style = "animation", saveToPlaygroundBehavior ?saveToPlayground = "always")
```

## Language Models

### Ask Chat GPT

Ask Chat GPT using a prompt. Follow up will open a follow-up prompt to the model.

```
enum generativeResultType {
    'Text',
    'Number',
    'Date',
    'Boolean',
    'List',
    'Dictionary',
}

askChatGPT(text prompt, bool ?followUp = false, generativeResultType ?resultType = "Automatic")
```

---

### Ask LLM

Ask a specific LLM using a prompt. Follow up will open a follow-up prompt to the model.

```
enum LLMModel {
    'Private Cloud Compute',
    'Apple Intelligence on Device',
    'ChatGPT',
}

enum generativeResultType {
    'Text',
    'Number',
    'Date',
    'Boolean',
    'List',
    'Dictionary',
}

askLLM(text prompt, LLMModel ?model = "Private Cloud Compute", bool ?followUp = false, generativeResultType ?resultType = "Automatic")
```

---

### Ask On-Device LLM

Ask an On-Device LLM using a prompt. Follow up will open a follow-up prompt to the model.

```
enum generativeResultType {
    'Text',
    'Number',
    'Date',
    'Boolean',
    'List',
    'Dictionary',
}

askDeviceLLM(text prompt, bool ?followUp = false, generativeResultType ?resultType = "Automatic")
```

---

### Ask Private Cloud Compute LLM

Ask a private cloud compute LLM using a prompt. Follow up will open a follow-up prompt to the model.

```
enum generativeResultType {
    'Text',
    'Number',
    'Date',
    'Boolean',
    'List',
    'Dictionary',
}

askCloudLLM(text prompt, bool ?followUp = false, generativeResultType ?resultType = "Automatic")
```

## Writing Tools

### Adjust Text Tone

Adjust the tone of the text using Apple Intelligence Writing Tools.

```
enum textTone {
    'friendly',
    'professional',
    'concise',
}

adjustTextTone(text text, textTone tone): text
```

---

### Make List From Text

Generate list from text  using Apple Intelligence Writing Tools.

```
generateList(text text): text
```

---

### Make Table From Text

Generate table from text using Apple Intelligence Writing Tools.

```
generateTable(text text): text
```

---

### Proofread Text

Generate a proofread version of text using Apple Intelligence Writing Tools.

```
generateProofread(text text): text
```

---

### Rewrite Text

Generate a rewritten version of text using Apple Intelligence Writing Tools.

```
generateRewrite(text text): text
```

---

### Summarize Text

Generate a summarized version of text using Apple Intelligence Writing Tools.

```
generateSummary(text text): text
```

---

### Summarize Text Key Points

Generate a summary of key points of text using Apple Intelligence Writing Tools.

```
generateKeyPoints(text text): text
```
