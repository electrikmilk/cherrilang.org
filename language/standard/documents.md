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
makeArchive(files,format=".zip",name="")
```

#### Archive formats

 - .zip
 - .tar.gz
 - .tar.bz2
 - .tar.xz
 - .tar
 - .gz
 - .cpio
 - .iso

---

### Make Disk Image

Create a disk image containing `contents`.

```
makeDiskImage(name,contents,encrypt=false)
```

---

### Make Sized Disk Image

Create a disk image of a specific size containing `contents`.

```
makeDiskImage(name,contents,size="1 GB",encrypt=false)
```

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

Create a folder at `path` in the user's Shortcuts folder in their iCloud Drive.

```
createFolder(path)
```

---

### Delete Files

Delete `files`, optionally immediately.

```
deleteFiles(files,immediately=false)
```

---

### Get Contents of Folder

Get contents of `folder`.

```
getFolderContents(folder,recursive=true)
```

---

### Get File

Get `path` in the users Shortcuts folder.

```
getFile(path,errorIfNotFound=true)
```

---

### Get File From Folder

Get `path` in `folder`.

```
getFileFromFolder(folder,path,errorIfNotFound=true)
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

Save `file` to `path`.

```
saveFile(file,path,overwrite=false)
```

---

### Prompt to Save

Prompt to save `file`.

```
saveFilePrompt(file,overwrite=false)
```

---

### Select File

Prompt to select a file.

```
selectFile(multiple=false)
```

## Files

### Get File Detail

Get `detail` of `file`.

```
getFileDetail(file,detail)
```

---

### Get Parent Directory

Get the parent directory of `input`.

```
getParentDirectory(input)
```

---

### Open File

Open the given file in the default app, or prompt the user to pick an app to open the file in.

```
openFile(file,prompt=false)
```

## Network

### Connect to Server

Connect to the server at `url`.

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
makeQRCode(input,errorCorrection="Medium")
```

#### Error Correction Levels

- Low
- Medium _(default)_
- Quartile
- High

## Rich Text

### Make HTML from Rich Text

Convert `richText` into HTML.

```
makeHTML(input,makeFullDocument=false)
```

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

Find `find` in `subject` and replace it with `replacement`.

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

Use a regular-expression to find `find` in `subject` and replace it with `replacement`.

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

Change the case of `text` to UPPERCASE.

```
uppercase(text)
```

---

### Change Case to Lowercase

Change the case of `text` to lowercase.

```
lowercase(text)
```

---

### Capitalize First Word

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

Change the case of `text` to Title Case.

```
titleCase(text)
```

---

### Change Case to Alternating Case

Change the case of `text` to aLtErNaTiNg cAsE.

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

### Languages

 - Arabic
 - Mandarin Chinese (Mainland)
 - Mandarin Chinese (Taiwan)
 - Dutch
 - English (UK)
 - English (US)
 - French
 - German
 - Indonesian
 - Italian
 - Japanese
 - Korean
 - Polish
 - Portuguese (Brazil)
 - Russian
 - Spanish (Spain)
 - Thai
 - Turkish
 - Vietnamese

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
