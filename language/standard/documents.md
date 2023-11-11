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
extractArchive(variable file)
```

---

### Make Archive

Create an archive of `files` named `name` in `format`.

```
makeArchive(variable files, enum ?format = ".zip", string ?name)
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
makeDiskImage(string name, variable contents, boolean ?encrypt = false)
```

*Minimum Version: iOS 15*

*macOS only*

---

### Make Sized Disk Image

Create a disk image of a specific size containing `contents`.

```
makeSizedDiskImage(string name, variable contents, string ?size = "1 GB", boolean ?encrypt = false)
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

*Minimum Version: iOS 15*

*macOS only*

## Books

### Add to Books

Add `input` to books. `input` is expected to be a PDF.

```
addToBooks(variable input)
```

## Editing

### Markup

Opens `document` in a markup editor.

```
markup(variable document)
```

## File Storage

### Create Folder

Create a folder at `path` in the user's Shortcuts folder in their iCloud Drive.

```
createFolder(string path)
```

---

### Delete Files

Delete `files`, optionally immediately.

```
deleteFiles(variable input, boolean ?immediately = false)
```

---

### Get Contents of Folder

Get contents of `folder`.

```
getFolderContents(variable folder, boolean ?recursive = true)
```

---

### Get File

Get `path` in the user's Shortcuts folder.

```
getFile(string path, boolean ?errorIfNotFound = true)
```

---

### Get File From Folder

Get `path` in `folder`.

```
getFileFromFolder(variable folder, string path, boolean ?errorIfNotFound = true)
```

---

### Get File Link

Get a link to `file`.

```
getFileLink(variable file)
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

```
rename(variable file, string newName)
```

---

### Reveal

Reveal `files` in Finder.

```
reveal(variable files)
```

---

### Save

Save `file` to `path`.

```
saveFile(string path, variable content, boolean ?overwrite = false)
```

---

### Prompt to Save

Prompt to save `file`.

```
saveFilePrompt(variable file, boolean ?overwrite = false)
```

---

### Select File

Prompt to select a file.

```
selectFile(boolean ?multiple = false)
```

## Files

### Get File Detail

Get `detail` of `file`.

```
getFileDetail(variable file, string detail)
```

---

### Get Parent Directory

Get the parent directory of `input`.

```
getParentDirectory(variable input)
```

---

### Open File

Open the given file in the default app, or prompt the user to pick an app to open the file in.

```
openFile(variable file, boolean ?prompt = false)
```

## Network

### Connect to Server

Connect to the server at `url`.

```
connectToServer(string url)
```

## Notes

### Append to Note

Append `input` to `note`.

```
appendNote(string note, string input)
```

---

### Open Note

Open `note` in Notes.

```
openNote(variable note)
```

## Previewing

### Quicklook

Preview `input`.

```
quicklook(variable input)
```

---

### Show Result

Show `input` in a dialog.

```
show(string input)
```

## Printing

### Print

Prompt the user to physically print `input`.

```
print(variable input)
```

---

### Split PDF

Split `pdf` into pages.

```
splitPDF(variable pdf)
```

## QR Codes

### Make QR Code

Generate a QR code using `input` with error correction level `errorCorrection`.

```
makeQRCode(string input, enum ?errorCorrection = "Medium")
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
makeHTML(variable input, boolean ?makeFullDocument = false)
```

---

### Make Markdown from Rich Text

Convert `richText` into Markdown.

```
makeMarkdown(variable richText)
```

---

### Get Rich Text from HTML

Get rich text from `html`.

```
getRichTextFromHTML(variable html)
```

---

### Get Rich Text from Markdown

Get rich text from `markdown`.

```
getRichTextFromMarkdown(variable markdown)
```

## Text

### Get Text from Image

Get text from `image`.

```
getTextFromImage(variable image)
```

---

### Get Name of Emoji

Get the emoji name of `emoji`.

```
getEmojiName(string emoji)
```

---

### Get Text from Input

Get text from `input`.

```
getText(variable input)
```

---

### Define Word

Show the definition of `word`.

```
define(string word)
```

---

### Transcribe Text

Transcribe the text of `audioFile`.

```
transcribeText(variable audioFile)
```

*iOS 17+ only*

## Text Editing

### Change Case to Uppercase

Change the case of `text` to UPPERCASE.

```
uppercase(string text)
```

---

### Change Case to Lowercase

Change the case of `text` to lowercase.

```
lowercase(string text)
```

---

### Capitalize First Word

Capitalize the first word in `text`.

```
capitalize(string text)
```

---

### Capitalize All Text

Capitalize all the words in `text`.

```
capitalizeAll(string text)
```

---

### Change Case to Title Case

Change the case of `text` to Title Case.

```
titleCase(string text)
```

---

### Change Case to Alternating Case

Change the case of `text` to aLtErNaTiNg cAsE.

```
alternateCase(string text)
```

---

### Join Text

Combine `text` with `separator`.

```
joinText(string text, string separator)
```

---

### Correct Spelling

Correct the spelling of `text`.

```
correctSpelling(string text)
```

---

### Get Group from Matched Text

Get group at `index` in `matches`.

```
matchedTextGroupIndex(variable matches, integer index)
```

---

### Replace Text

Find `find` in `subject` and replace it with `replacement`.

```
replaceText(string find, string replacement, string subject)
```

---

### Case Insensitive Replace Text

Case-insensitive find `find` in `subject` and replace with `replacement`.

```
iReplaceText(string find, string replacement, string subject)
```

---

### Regular Expression Replace Text

Use a regular expression to find `find` in `subject` and replace it with `replacement`.

```
regReplaceText(string expression, string replacement, string subject)
```

---

### Case Insensitive Regular Expression Replace Text

Use a case-insensitive regular-expression to find `find` in `subject` and replace with `replacement`.

```
iRegReplaceText(string expression, string replacement, string subject)
```

---

### Split Text

Split `text` by `separator`.

```
splitText(string text, string separator)
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
translate(string text, string to)
```

---

### Translate Text

Translate `text` from `from` to `to`.

```
translateFrom(string text, string from, string to)
```

---

### Detect Language

Detect the language of `text`.

```
detectLanguage(string text)
```
