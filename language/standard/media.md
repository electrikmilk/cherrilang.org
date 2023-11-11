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
searchAppStore(query)
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
takeVideo(camera,quality,startImmediately)
```

- `camera` is a string value of `Front` or `Back`.
- `quality` is a string value of `Low`, `Medium`, `High`. Default is `Medium`.
- `startImmediately` is an optional boolean value set to `false` by default.

## Audio

### Record Audio

Start recording audio.

```
record(quality,start)
```

Both `quality` and `start` are optional.

#### Recording Qualities

- Normal (default)
- Very High

#### Recording Starts

- On Tap (default)
- Immediately

---

### Shazam It

Start Shazam.

```
startShazam(show,showError)
```

`show` and `showError` are optional booleans which default values are `true`.

## Device

### Take Screenshot

{: .warning }
Arguments will not apply to mobile devices

```
takeScreenshot(mainMonitorOnly)
```

`mainMonitorOnly` is an optional boolean, the default value is `false`.

---

### Take Interactive Screenshot

Take an interactive Screenshot

```
takeInteractiveScreenshot(selection)
```

`selection` is an optional string with a default value of `Window`. The possible arguments are `Window` or `Custom`.

**Note: Mac-only action**

## GIFs

### Add Frame to GIF

Add a frame to a GIF.

```
addToGIF(image,gif,delay,autoSize,width,height)
```

- `autoSize` is a boolean, the default value is `true`. `width` and `height` can only be used when `autoSize` is `false`.
- `delay` is optional, the default value is `0.25`.

---

### Make Video from GIF

Make video from `gif`, looping `loops` number of times. Returns GIF as video.

```
makeVideofromGIF(gif,loops)
```

`loops` is an optional integer, the default value is `1`.

## Image Editing

### Combine Images

Combine `images` using `mode` with `spacing`.

```
combineImages(images,mode="Horizontally",spacing=0)
```

#### Combine Modes

- Horizontally
- Vertically
- Grid

### Crop Image

Crop `image` at `position` to `width` and `height`. Returns cropped image.

```
cropImage(image,position="Center",width="100",height="100")
```

#### Crop Positions

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
flipImage(image,direction)
```

#### Flip Directions

- Horizontal
- Vertical

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
convertToJPEG(image,quality,preserveMetadata)
```

- `quality` is optional.
- `preserveMetadata` is optional, the default value is `true`.

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

## Photos

### Create Photo Album

Create an album named `name` with `photos`.

```
createAlbum(name,photos)
```

`photos` is optional.

---

### Delete Photos

Delete `photos` from photo library.

```
deletePhotos(photos)
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
getLatestBursts(count)
```

---

### Get Latest Live Photos

Get latest live photos.

```
getLatestLivePhotos(count)
```

---

### Get Latest Screenshots

Get latest screenshots.

```
getLatestScreenshots(count)
```

---

### Get Latest Photos

Get latest photos.

```
getLatestPhotos(count,includeScreenshots)
```

`includeScreenshots` is a boolean, the default value is `true`.

---

### Get Latest Videos

Get latest videos.

```
getlatestVideos(count)
```

---

### Remove from Photo Album

Remove `photo` to photo album `album`.

```
removeFromAlbum(photo,album)
```

---

### Save to Photo Album

Save `photo` to photo album `Recents`.

```
savePhoto(photo)
```

---

### Select Photos

Select photos from photo library.

```
selectPhotos(selectMultiple)
```

`selectMultiple` is an optional boolean, the default value is `false`.

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
setVolume(number)
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
playNext(music)
```

---

### Add to Playing Later

Add `music` as the last to play in the queue.

```
playLater(music)
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
addToPlaylist(name,songs)
```

---

### Create Playlist

Create a playlist.

```
createPlaylist(name,music,description,author)
```

The arguments `music`, `description`, and `author` are optional.

## Podcasts

### Find Podcasts

Search Apple Podcasts for podcasts using `query`.

```
searchPodcasts(query)
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
setMetadata(variable media, variable ?artwork, string ?title, string ?artist, string ?album, string ?genre, string ?year)
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
