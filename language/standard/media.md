---
title: Media
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 5
---

# Media Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Camera

### Take Photo

Takes a photo. `showPreview` is a optional `boolean` that defaults to `true`.

```
takePhoto(showPreview)
```

---

### Take Photos

Takes `number` photo(s).

```
takePhotos(number)
```

---

### Take Video

Takes a video using `camera` in `quality`.

```
takeVideo(camera,quality,startImmediately)
```

- `camera` is a string value of `Front` or `Back`.
- `quality` is a string value of `Low`, `Medium`, `High`. Default is `Medium`.
- `startImmediately` is an optional boolean value set to `false` by default.

## Music

### Get Current Song

Gets the current song.

```
getCurrentSong()
```

---

### Clear Up Next

Clears the up next songs.

```
clearUpNext()
```

## Photos

### Get Latest Photo Import

Gets the latest photo import.

```
latestPhotoImport()
```

## Playback

### Set Volume

Set device volume to `number`.

```
setVolume(number)
```

## Video

### Trim Video

Prompts the user to trim `video`. Returns the trimmed video.

```
trimVideo(video)
```
