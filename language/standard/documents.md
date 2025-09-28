---
title: Documents
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 7
---

# Documents Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .warning }
> To use actions in this category, use this include statement:
>
> ```
> #include 'actions/documents'
> ```

### Convert to USDZ

```
convertToUSDZ(variable file)
```

## Archives

### Extract Archive

Extract files from the archive `file`.

```
extractArchive(variable file)
```

---

### Make Archive

Create an archive of `files` named `name` in `format`.

```
enum archiveFormat {
    '.zip',
    '.tar.gz',
    '.tar.bz2',
    '.tar.xz',
    '.tar',
    '.gz',
    '.cpio',
    '.iso',
}

makeArchive(variable files, archiveFormat ?format = ".zip", text ?name)
```

## Books

### Add to Books

Add `input` to books. `input` is expected to be a PDF or epub file.

```
addToBooks(variable input)
```

## Editing

### Markup

Opens document in a markup editor.

```
markup(variable document)
```

## Files & Folders

### Append File

Append text to a file.

```
appendToFile(text filePath, text text)
```

---

### Create Folder

Create a folder.

```
createFolder(text path)
```

---

### Delete Files

Delete a file or multiple files.

```
deleteFiles(variable input, bool ?immediately = false)
```

---

### File Size

Returns the size of a file.

```
enum fileSizeFormat {
    'Closest Unit',
    'Bytes',
    'Kilobytes',
    'Megabytes',
    'Gigabytes',
    'Terabytes',
    'Petabytes',
    'Exabytes',
    'Zettabytes',
    'Yottabytes',
}

fileSize(variable file, fileSizeFormat format)
```

---

### Filter Files

Filter the provided files with various filters.

```
enum filesSortBy {
    'File Size',
    'File Extension',
    'Creation Date',
    'File Path',
    'Last Modified Date',
    'Name',
    'Random',
}

enum fileOrderings {
    'Smallest First',
    'Biggest First',
    'Latest First',
    'Oldest First',
    'A to Z',
    'Z to A',
}

filterFiles(variable files, number ?limit, filesSortBy ?sortBy, fileOrderings ?orderBy)
```

---

### Get File

Get file from a path in the Shortcuts folder.

```
getFile(text path, bool ?errorIfNotFound = true)
```

---

### Get File Detail

Get a detail about a file.

```
enum fileDetail {
    'File Size',
    'File Extension',
    'Creation Date',
    'File Path',
    'Last Modified Date',
    'Name',
}

getFileDetail(variable file, fileDetail detail)
```

---

### Get File From Folder

Get a file from a folder.

```
getFileFromFolder(text folder, text path, bool ?errorIfNotFound = true)
```

---

### Get File Link

Get a link for the provided file.

```
getFileLink(variable file)
```

---

### Get Folder Contacts

Get contents of folder.

```
getFolderContents(variable folder, bool ?recursive = false)
```

---

### Get Parent Directory

Get the parent directory of the input directory.

```
getParentDirectory(variable input)
```

---

### Get Selected

```
getSelectedFiles()
```

---

### Label File

Label a file.

```
enum fileLabel {
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'gray',
}

labelFile(variable file, fileLabel color)
```

---

### Open File

Open a file.

```
openFile(variable file, bool ?askWhenRun = false)
```

---

### Prepend File

Prepend text to a file.

```
prependToFile(text filePath, text text)
```

---

### Rename File

```
rename(variable file, text newName)
```

---

### Reveal in Finder

```
reveal(variable files)
```

---

### Save File

Save contents to a file at the specified path.

```
saveFile(text path, variable content, bool ?overwrite = false)
```

---

### Save File Prompt

Prompt the user to choose a location to save the file.

```
saveFilePrompt(variable file, bool ?overwrite = false)
```

---

### Select File

Prompt the user to select one or optionally multiple files.

```
selectFile(bool ?selectMultiple = false)
```

---

### Select Folder

Prompt the user to select one or optionally multiple folders.

```
selectFolder(bool ?selectMultiple = false)
```

## Notes

### Append Note

Append text to a note.

```
appendNote(text note, text input)
```

---

### Open Note

Open note in the Notes app.

```
openNote(variable note)
```

---

### Show Quick Note

Show quick note.

```
showQuickNote()
```

## Printing

### Print

Print input to a printer.

```
print(variable input)
```

## QR Codes

### Make QR Code

```
enum QRCodeErrorCorrection {
    'Low',
    'Medium',
    'Quartile',
    'High',
}

makeQRCode(text input, QRCodeErrorCorrection ?errorCorrection = "Medium", color ?foregroundColor = [{float 0} {float 0} {float 0} {float 1}], color ?backgroundColor = [{float 2} {float 2} {float 2} {float 1}])
```
