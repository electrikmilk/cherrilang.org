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

## App Store

### Find App Store Apps

Search the app store for apps using `query`.

```
searchAppStore(text query)
```

## Audio

### Record Audio

Record some audio.

```
recordAudio(enum ?quality = "Normal", enum ?start = "On Tap")
```

#### Qualities

- Normal
- Very High

#### Start Recording

- On Tap
- Immediately

---

### Recognize Music

Use Shazam to recognize music.

```
startShazam(bool ?show = true, bool ?showError = true)
```

## Camera

### Take Photo

Takes `number` of photo(s).

```
takePhoto(integer ?count = 1, boolean ?showPreview = true)
```

---

### Take Video

Takes a video using `camera` in `quality`.

```
takeVideo(enum ?camera = "Front", enum ?quality = "High", enum ?recordingStart = "Immediately")
```

#### Cameras

- Front
- Back

#### Qualities

- Low
- Medium
- High

#### Start Recording

- On Tap
- Immediately

_**Note:** Enum values are case-sensitive._

## Device

### Take Screenshot

```
takeScreenshot(bool ?mainMonitorOnly = false)
```

**Note: `mainMonitorOnly` will only apply to a Mac**

---

### Take Interactive Screenshot

Take an interactive Screenshot

```
takeInteractiveScreenshot(enum ?selection = "Window")
```

#### Selections

- Window
- Custom

_**Note:** Enum values are case-sensitive._

**Note: Mac-only action**

## GIFs

### Add Frame to GIF

Add a frame to a GIF.

```
addToGIF(text image, text gif, text ?delay = "0.25", bool ?autoSize = true, text ?width, text ?height)
```

**Note:** `width` and `height` can only be used when `autoSize` is `false`.

---

### Make Video from GIF

Make video from `gif`, looping `loops` number of times. Returns GIF as video.

```
makeVideoFromGIF(variable gif, number ?loops = 1)
```

## Image Editing

### Combine Images

Combine `images` using `mode` with `spacing`.

```
combineImages(variable images, text ?mode = "vertically", number ?spacing = 1)
```

#### Modes

- Horizontally
- Vertically
- Grid

### Crop Image

Crop `image` at `position` to `width` and `height`. Returns cropped image.

```
cropImage(variable image, text ?position = "Center", text ?width = "100", enum ?height = "100")
```

#### Positions

- Center
- Top Left
- Top Right
- Bottom Left
- Bottom Right
- Custom

---

### Flip Image

Flip `image` in `direction`. Returns the flipped image.

```
flipImage(variable image, enum direction)
```

#### Flip Directions

- Horizontal
- Vertical

_**Note:** Enum values are case-sensitive._

---

### Remove Image Background

Remove the background from an image.

```
removeBackground(variable image, boolean ?crop = false)
```

---

### Rotate Image

Rotate `image` `degrees` number of degrees. Returns rotated image.

```
rotate(image,degrees)
```

## Images

### Convert Image

Convert image to another image format.

```
convertImage(image,format,preserveMetadata)
```

`preserveMetadata` is optional, the default value is `true`.

#### Image Formats

- TIFF
- GIF
- PNG
- BMP
- PDF
- HEIF

---

### Convert Image to JPEG

Convert an image to a JPEG.

```
convertToJPEG(variable image, number ?compressionQuality, bool ?preserveMetadata = true)
```

---

### Strip Image Metadata

Strip metadata from an image.

```
stripImageMetadata(variable image)
```

## iTunes Store

### Show in iTunes Store

Show `product` in the iTunes Store.

```
showIniTunes(product)
```

## Music

### Get Current Song

Gets the current song.

```
getCurrentSong()
```

---

### Add to Music Library

Add `songs` to music library.

```
addToMusic(songs)
```

---

### Select Music

Select song(s) from the Music app.

```
selectMusic(bool ?selectMultiple = false)
```

## Photos

### Create Photo Album

Create an album named `name` with `photos`.

```
createAlbum(text name, variable ?images)
```

---

### Delete Photos

Delete `photos` from photo library.

```
deletePhotos(variable photos)
```

---

### Get Last Import

Gets the latest photo import.

```
getLastImport()
```

---

### Get Latest Bursts

Get latest photo bursts.

```
getLatestBursts(number count)
```

---

### Get Latest Live Photos

Get latest live photos.

```
getLatestLivePhotos(number count)
```

---

### Get Latest Screenshots

Get latest screenshots.

```
getLatestScreenshots(number count)
```

---

### Get Latest Photos

Get latest photos.

```
getLatestPhotos(number count, bool ?includeScreenshots = true)
```

---

### Get Latest Videos

Get latest videos.

```
getlatestVideos(number count)
```

---

### Remove from Photo Album

Remove `photo` to photo album `album`.

```
removeFromAlbum(variable photo, text album)
```

---

### Save to Photo Album

Save `photo` to photo album `Recents`.

```
savePhoto(variable photo)
```

---

### Select Photos

Select photos from photo library.

```
selectPhotos(bool ?selectMultiple = false)
```

## Playback

### Play Music

Play Apple Music on current device.

```
play()
```

---

### Pause Music

Pause Apple Music on current device.

```
pause()
```

---

### Toggle Play/Pause Music

Play/Pause Apple Music on current device depending on the current play status.

```
togglePlayPause()
```

---

### Set Volume

Set device volume to `number`.

```
setVolume(number number)
```

---

### Skip Back

Skip back to the previous song.

```
skipBack()
```

---

### Skip Forward

Skip forward to the next song.

```
skipFwd()
```

## Playing Next

### Add to Playing Next

Add `music` as the next to play in the queue.

```
playNext(variable music)
```

---

### Add to Playing Later

Add `music` as the last to play in the queue.

```
playLater(variable music)
```

---

### Clear Playing Next

Clears the songs up next.

```
clearUpNext()
```

## Playlists

### Add to Playlist

Add `songs` to playlist with `name`.

```
addToPlaylist(text playlistName, variable songs)
```

---

### Create Playlist

Create a playlist.

```
createPlaylist(text title, variable ?songs, text ?description, text ?author)
```

## Podcasts

### Find Podcasts

Search Apple Podcasts for podcasts using `query`.

```
searchPodcasts(text query)
```

## Video

### Strip Media Metadata

Strip metadata from video or video.

```
stripMediaMetadata(variable media)
```

---

### Set Media Metadata

Set metadata for a video or audio.

```
setMetadata(variable media, variable ?artwork, text ?title, text ?artist, text ?album, text ?genre, text ?year)
```

---

### Encode Video

Encode a video.

```
encodeVideo(variable video, enum ?size = "Passthrough", enum ?speed = "Normal", boolean ?preserveTransparency = false)
```

#### Sizes:

- 640×480
- 960×540
- 1280×720
- 1920×1080
- 3840×2160
- HEVC 1920×1080
- HEVC 3840x2160
- ProRes 422

#### Speeds:
- 0.5X
- Normal
- 2X

---

### Encode Audio

Encode audio.

```
encodeAudio(variable audio, enum ?format = "M4A", enum ?speed = "Normal")
```

#### Formats

- M4A
- AIFF

---

### Trim Video

Prompts the user to trim `video`. Returns the trimmed video.

```
trimVideo(variable video)
```
