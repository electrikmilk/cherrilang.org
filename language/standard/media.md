---
title: Media
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 12
---

# Media Actions
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
> #include 'actions/media'
> ```

### Search App Store

```
searchAppStore(text query)
```

---

### Show In iTunes

```
showIniTunes(variable product)
```

---

### Take Screenshot

```
takeScreenshot(bool ?mainMonitorOnly = false)
```

## Audio

### Encode Audio

Encode audio to a different format and/or speed.

```
enum audioFormats {
    'M4A',
    'AIFF',
}

enum audioSpeeds {
    '0.5X',
    'Normal',
    '2X',
}

encodeAudio(variable audio, audioFormats ?format = "M4A", audioSpeeds ?speed = "Normal")
```

---

### Play Audio

Play a sound.

```
playSound(variable input)
```

---

### Record Audio

Prompt the user to record audio.

```
enum audioQuality {
    'Normal',
    'Very High',
}

enum audioStart {
    'On Tap',
    'Immediately',
}

recordAudio(audioQuality ?quality = "Normal", audioStart ?start = "On Tap")
```

## Camera

### Take Photo

Prompt the user to start recording a video.

```
enum cameraOrientation {
    'Front',
    'Back',
}

enum videoQuality {
    'Low',
    'Medium',
    'High',
}

enum recordingStart {
    'On Tap',
    'Immediately',
}

takeVideo(cameraOrientation ?camera = "Front", videoQuality ?quality = "High", recordingStart ?recordingStart = "Immediately")
```

---

### Take Photo

Prompt the user to take one or more photos.

```
takePhoto(number ?count = 1, bool ?showPreview = true)
```

## Metadata

### Set Media Metadata

```
setMetadata(variable media, variable ?artwork, text ?title, text ?artist, text ?album, text ?genre, text ?year)
```

---

### Strip Media Metadata

```
stripMediaMetadata(variable media)
```

## Podcasts

### Get Podcast Detail

```
enum podcastDetail {
    'Feed URL',
    'Genre',
    'Episode Count',
    'Artist',
    'Store ID',
    'Store URL',
    'Artwork',
    'Artwork URL',
    'Name',
}

getPodcastDetail(variable podcast, podcastDetail detail)
```

---

### Get Podcasts

Get users podcasts.

```
getPodcasts()
```

---

### Play Podcast

```
playPodcast(variable podcast)
```

---

### Search Podcasts

```
searchPodcasts(text query)
```

## Shazam

### Get Shazam Detail

Get a detail about a Shazam result.

```
enum shazamDetail {
    'Apple Music ID',
    'Artist',
    'Title',
    'Is Explicit',
    'Lyrics Snippet',
    'Lyric Snippet Synced',
    'Artwork',
    'Video URL',
    'Shazam URL',
    'Apple Music URL',
    'Name',
}

getShazamDetail(variable input, shazamDetail detail)
```

---

### Start Shazam

Prompt the user to play music for Shazam to recognize. Returns Shazam result.

```
startShazam(bool ?show = true, bool ?showError = true)
```

## Video Editing

### Encode Video

Encode a video to a different format, size and/or speed.

```
enum encodeVideoSizes {
    '640×480',
    '960×540',
    '1280×720',
    '1920×1080',
    '3840×2160',
    'HEVC 1920×1080',
    'HEVC 3840x2160',
    'ProRes 422',
}

enum encodeVideoSpeeds {
    '0.5X',
    'Normal',
    '2X',
}

encodeVideo(variable video, encodeVideoSizes ?size = "Passthrough", encodeVideoSpeeds ?speed = "Normal", bool ?preserveTransparency = false)
```

---

### Trim Video

Prompts the user to trim the video.

```
trimVideo(variable video)
```

## Voice Memos

### Search Voice Memos

```
searchVoiceMemos(text search): array
```
