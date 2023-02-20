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

```ruby
extractArchive(file)
```

---

### Make Archive

Create an archive of `files` named `name` in `format`.

```ruby
makeArchive(name,format,files)
```

---

### Make Disk Image

Create a disk image containing `contents`.

```ruby
makeDiskImage(name,contents,encrypt)
```

`encrypt` is a boolean value, the default value is `false`.

### Make Sized Disk Image

Create a disk image of a specific size containing `contents`.

```ruby
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

```ruby
addToBooks(input)
```

## Editing

### Markup

Opens `input` in a markup editor.

```ruby
markup(input)
```

## File Storage

### Create Folder

Create a folder at `path` in the users Shortcuts folder in their iCloud Drive.

```ruby
createFolder(path)
```

---

### Delete Files

Delete `files`. `immediately` is a boolean, default is `false`.

```ruby
deleteFiles(files,immediately)
```

---

### Get Contents of Folder

Get contents of `folder`. `recursive` is a boolean, default is `true`.

```ruby
getFolderContents(folder,recursive)
```

---

### Get File

Get `path` in the users Shortcuts folder. `errorIfNotFound` is a boolean, default is `true`.

```ruby
getFile(path,errorIfNotFound)
```

---

### Get File From Folder

Get `path` in `folder`. `errorIfNotFound` is a boolean, default is `true`.

```ruby
getFileFromFolder(folder,path,errorIfNotFound)
```

---

### Get File Link

Get a link to `file`.

```ruby
getFileLink(file)
```

---

### Get Selected Files

Get selected files in Finder.

```ruby
getSelectedFiles()
```

---

### Rename

Rename `file` to `newName`.

rename(file,newName)

---

### Reveal

Reveal `files` in Finder.

```ruby
reveal(files)
```

---

### Save

Save `file` to `path`. `overwrite` is a boolean, default is `false`.

```ruby
saveFile(file,path,overwrite)
```

---

### Prompt to Save

Prompt to save `file`. `overwrite` is a boolean, default is `false`.

```ruby
saveFilePrompt(file,overwrite)
```

---

### Select File

Prompt to select a file.

```ruby
selectFile(multiple)
```

`multiple` is a boolean, default is `false`.

## Files

### Get File Detail

Get `detail` of `file`.

```ruby
getFileDetail(file,detail)
```

---

### Get Parent Directory

Get parent directory of `input`.

```ruby
getParentDirectory(input)
```

---

### Open File

Open given file in the default app, or prompt the user to pick a app to open the file in.

```ruby
openFile(file,prompt)
```

`prompt` is a boolean, the default value is `false`.

## Network

### Connect to Server

Connect to server at `url`.

```ruby
connectToServer(url)
```

## Notes

### Append to Note

Append `input` to `note`.

```ruby
appendNote(note,input)
```

---

### Show Note

Show `note`.

```ruby
showNote(note)
```

## Previewing

### Quicklook

Preview `input`.

```ruby
quicklook(input)
```

---

### Show Result

Show `input` in a dialog.

```ruby
show(input)
```

## Printing

### Print

Print `input`.

```ruby
print(input)
```

---

### Split PDF

Split `pdf` into pages.

```ruby
splitPDF(pdf)
```

## QR Codes

### Make QR Code

Generate a QR code using `input` with error correction level `errorCorrection`.

```ruby
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

```ruby
makeHTML(input,makeFullDocument)
```

`makeFullDocument` is a boolean, default is `false`.

---

### Make Markdown from Rich Text

Convert `richText` into Markdown.

```ruby
makeMarkdown(richText)
```

---

### Get Rich Text from HTML

Get rich text from `html`.

```ruby
getRichTextFromHTML(html)
```

---

### Get Rich Text from Markdown

Get rich text from `markdown`.

```ruby
getRichTextFromMarkdown(markdown)
```

## Text

### Get Text from Image

Get text from `image`.

```ruby
getTextFromImage(image)
```

---

### Get Name of Emoji

Get the emoji name of `emoji`.

```ruby
getEmojiName(emoji)
```

---

### Get Text from Input

Get text from `input`.

```ruby
getText(input)
```

---

### Define Word

Show the definition of `word`.

```ruby
define(word)
```

---

### Get Group from Matched Text

Get group at `index` in `matches`.

```ruby
matchedTextGroupIndex(matches,index)
```

## Text Editing

### Split Text

Split `text` by `separator`.

```ruby
splitText(text,separator)
```

---

### Combine Text

Combine `text` with `glue`.

```ruby
combineText(text,glue)
```

---

### Replace Text

Find `find` in `subject` and replace with `replacement`.

```ruby
replaceText(find,replacement,subject)
```

---

### Case Insensitive Replace Text

Case-insensitive find `find` in `subject` and replace with `replacement`.

```ruby
iReplaceText(find,replacement,subject)
```

---

### Regular Expression Replace Text

Use a regular-expression to find `find` in `subject` and replace with `replacement`.

```ruby
regReplaceText(expression,replacement,subject)
```

---

### Case Insensitive Regular Expression Replace Text

Use a case-insensitive regular-expression to find `find` in `subject` and replace with `replacement`.

```ruby
iRegReplaceText(expression,replacement,subject)
```

---

### Change Case to Uppercase

Change case of `text` to UPPERCASE.

```ruby
uppercase(text)
```

---

### Change Case to Lowercase

Change case of `text` to lowercase.

```ruby
lowercase(text)
```

---

### Captialize First Word

Capitalize the first word in `text`.

```ruby
capitalize(text)
```

---

### Capitalize All Text

Capitalize all the words in `text`.

```ruby
capitalizeAll(text)
```

---

### Change Case to Title Case

Change case of `text` to Title Case.

```ruby
titleCase(text)
```

---

### Change Case to Alternating Case

Change case of `text` to aLtErNaTiNg cAsE.

```ruby
alternateCase(text)
```

---

### Correct Spelling

Correct the spelling of `text`.

```ruby
correctSpelling(text)
```

## Translation

### Translate Text From Detected Language

Translate `text` from the detected language of `text` to `to`.

```ruby
translate(text,to)
```

---

### Translate Text

Translate `text` from `from` to `to`.

```ruby
translateFrom(text,from,to)
```

---

### Detect Language

Detect the language of `text`.

```ruby
detectLanguage(text)
```
