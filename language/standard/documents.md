---
title: Documents
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 3
---

# Documents Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Archives

### Extract Archive

Extract files from archive `file`.

```
extractArchive(file)
```

---

### Make Archive

Create an archive of `files` named `name` in `format`.

```
makeArchive(name,format,files)
```

---

### Make Disk Image

Create a disk image containing `contents`.

```
makeDiskImage(name,contents,encrypt)
```

`encrypt` is a boolean value, the default value is `false`.

### Make Sized Disk Image

Create a disk image of a specific size containing `contents`.

```
makeDiskImage(name,contents,size,encrypt)
```

`size` expects a standard storage size (e.g. 2 MB)

`encrypt` is a boolean value, the default value is `false`.

#### Storage Size Units

- bytes
- KB
- MB
- GB
- TB
- PB
- EB
- ZB
- YB

## Books

### Add to Books

Add `input` to books. `input` is expected to be a PDF.

```
addToBooks(input)
```

## Editing

### Markup

Opens `input` in a markup editor.

```
markup(input)
```

## File Storage

### Create Folder

Create a folder at `path` in the users Shortcuts folder in their iCloud Drive.

```
createFolder(path)
```

---

### Delete Files

Delete `files`. `immediately` is a boolean, default is `false`.

```
deleteFiles(files,immediately)
```

---

### Get Contents of Folder

Get contents of `folder`. `recursive` is a boolean, default is `true`.

```
getFolderContents(folder,recursive)
```

---

### Get File

Get `path` in the users Shortcuts folder. `errorIfNotFound` is a boolean, default is `true`.

```
getFile(path,errorIfNotFound)
```

---

### Get File From Folder

Get `path` in `folder`. `errorIfNotFound` is a boolean, default is `true`.

```
getFileFromFolder(folder,path,errorIfNotFound)
```

---

### Get File Link

Get a link to `file`.

```
getFileLink(file)
```

---

### Get Selected Files

Get selected files in Finder.

```
getSelectedFiles()
```

---

### Rename

Rename `file` to `newName`.

rename(file,newName)

---

### Reveal

Reveal `files` in Finder.

```
reveal(files)
```

---

### Save

Save `file` to `path`. `overwrite` is a boolean, default is `false`.

```
saveFile(file,path,overwrite)
```

---

### Prompt to Save

Prompt to save `file`. `overwrite` is a boolean, default is `false`.

```
saveFilePrompt(file,overwrite)
```

---

### Select File

Prompt to select a file.

```
selectFile(multiple)
```

`multiple` is a boolean, default is `false`.

## Files

### Get File Detail

Get `detail` of `file`.

```
getFileDetail(file,detail)
```

---

### Get Parent Directory

Get parent directory of `input`.

```
getParentDirectory(input)
```

---

### Open File

Open given file in the default app, or prompt the user to pick a app to open the file in.

```
openFile(file,prompt)
```

`prompt` is a boolean, the default value is `false`.

## Network

### Connect to Server

Connect to server at `url`.

```
connectToServer(url)
```

## Notes

### Append to Note

Append `input` to `note`.

```
appendNote(note,input)
```

---

### Show Note

Show `note`.

```
showNote(note)
```

## Previewing

### Quicklook

Preview `input`.

```
quicklook(input)
```

---

### Show Result

Show `input` in a dialog.

```
show(input)
```

## Printing

### Print

Print `input`.

```
print(input)
```

---

### Split PDF

Split `pdf` into pages.

```
splitPDF(pdf)
```

## QR Codes

### Make QR Code

Generate a QR code using `input` with error correction level `errorCorrection`.

```
makeQRCode(input,errorCorrection)
```

#### Error Correction Levels

- Low
- Medium
- Quartile
- High

## Rich Text

### Make HTML from Rich Text

Convert `richText` into HTML.

```
makeHTML(input,makeFullDocument)
```

`makeFullDocument` is a boolean, default is `false`.

---

### Make Markdown from Rich Text

Convert `richText` into Markdown.

```
makeMarkdown(richText)
```

---

### Get Rich Text from HTML

Get rich text from `html`.

```
getRichTextFromHTML(html)
```

---

### Get Rich Text from Markdown

Get rich text from `markdown`.

```
getRichTextFromMarkdown(markdown)
```

## Text

### Get Text from Image

Get text from `image`.

```
getTextFromImage(image)
```

---

### Get Name of Emoji

Get the emoji name of `emoji`.

```
getEmojiName(emoji)
```

---

### Get Text from Input

Get text from `input`.

```
getText(input)
```

---

### Define Word

Show the definition of `word`.

```
define(word)
```

---

### Get Group from Matched Text

Get group at `index` in `matches`.

```
matchedTextGroupIndex(matches,index)
```

## Text Editing

### Split Text

Split `text` by `separator`.

```
splitText(text,separator)
```

---

### Combine Text

Combine `text` with `glue`.

```
combineText(text,glue)
```

---

### Replace Text

Find `find` in `subject` and replace with `replacement`.

```
replaceText(find,replacement,subject)
```

---

### Case Insensitive Replace Text

Case-insensitive find `find` in `subject` and replace with `replacement`.

```
iReplaceText(find,replacement,subject)
```

---

### Regular Expression Replace Text

Use a regular-expression to find `find` in `subject` and replace with `replacement`.

```
regReplaceText(expression,replacement,subject)
```

---

### Case Insensitive Regular Expression Replace Text

Use a case-insensitive regular-expression to find `find` in `subject` and replace with `replacement`.

```
iRegReplaceText(expression,replacement,subject)
```

---

### Change Case to Uppercase

Change case of `text` to UPPERCASE.

```
uppercase(text)
```

---

### Change Case to Lowercase

Change case of `text` to lowercase.

```
lowercase(text)
```

---

### Captialize First Word

Capitalize the first word in `text`.

```
capitalize(text)
```

---

### Capitalize All Text

Capitalize all the words in `text`.

```
capitalizeAll(text)
```

---

### Change Case to Title Case

Change case of `text` to Title Case.

```
titleCase(text)
```

---

### Change Case to Alternating Case

Change case of `text` to aLtErNaTiNg cAsE.

```
alternateCase(text)
```

---

### Correct Spelling

Correct the spelling of `text`.

```
correctSpelling(text)
```

## Translation

### Translate Text From Detected Language

Translate `text` from the detected language of `text` to `to`.

```
translate(text,to)
```

---

### Translate Text

Translate `text` from `from` to `to`.

```
translateFrom(text,from,to)
```

---

### Detect Language

Detect the language of `text`.

```
detectLanguage(text)
```
