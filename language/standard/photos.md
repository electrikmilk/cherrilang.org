---
title: Photos
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 16
---

# Photos Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .note }
> To use actions in this category, use this include statement:
>
> ```
> #include 'actions/photos'
> ```

### Create Album

```
createAlbum(text name, variable ?images)
```

---

### Delete Photos

```
deletePhotos(variable photos)
```

---

### Get Last Import

```
getLastImport()
```

---

### Get Latest Bursts

```
getLatestBursts(number count)
```

---

### Get Latest Live Photos

```
getLatestLivePhotos(number count)
```

---

### Get Latest Photos

```
getLatestPhotos(number count, bool ?includeScreenshots = true)
```

---

### Get Latest Screenshots

```
getLatestScreenshots(number count)
```

---

### Get Latest Videos

```
getLatestVideos(number count)
```

---

### Remove Photo from Album

```
removeFromAlbum(variable photo, text album)
```

---

### Rename Album

```
renameAlbum(variable album, text newTitle)
```

---

### Save Photo to Album

```
savePhoto(variable image, text ?album = "Recents")
```

---

### Search Photos

```
searchPhotos(text criteria): array
```

---

### Select Photos

Prompt the user to select from their photo library.

```
selectPhotos(bool ?selectMultiple = false)
```
