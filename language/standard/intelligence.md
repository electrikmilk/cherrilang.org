---
title: Apple Intelligence
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 23
---

# Apple Intelligence Actions
{: .no_toc }

Future release
{: .label .label-purple }

{: .warning }
The output of Apple's Intelligence actions may be unpredictable. Ensure any hard-coded prompts are simple and iteratively test that their output is relatively consistent with what you expect.

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

Generate an image with a prompt using Image Playground.

```
enum saveToPlaygroundBehavior {
    'always',
    'askWhenRun',
    'never',
}

createImagePlayground(text prompt, saveToPlaygroundBehavior ?saveToPlayground = "always", variable style)
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

Ask an on-Device LLM using a prompt. Follow up will open a follow-up prompt to the model.

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
summarizeKeyPoints(text text): text
```
