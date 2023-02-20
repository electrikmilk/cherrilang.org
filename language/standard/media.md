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

```ruby
takePhoto(showPreview)
```

---

### Take Photos

Takes `number` photo(s).

```ruby
takePhotos(number)
```

---

### Take Video

Takes a video using `camera` in `quality`.

```ruby
takeVideo(camera,quality,startImmediately)
```

- `camera` is a string value of `Front` or `Back`.
- `quality` is a string value of `Low`, `Medium`, `High`. Default is `Medium`.
- `startImmediately` is an optional boolean value set to `false` by default.

## Music

### Get Current Song

Gets the current song.

```ruby
getCurrentSong()
```

---

### Clear Up Next

Clears the up next songs.

```ruby
clearUpNext()
```

## Photos

### Get Latest Photo Import

Gets the latest photo import.

```ruby
latestPhotoImport()
```

## Playback

### Set Volume

Set device volume to `number`.

```ruby
setVolume(number)
```

## Video

### Trim Video

Prompts the user to trim `video`. Returns the trimmed video.

```ruby
trimVideo(video)
```
