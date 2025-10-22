---
title: Music
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 13
---

# Music Actions
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
> #include 'actions/music'
> ```

### Add to Music

Add music to library.

```
addToMusic(variable songs)
```

---

### Get Current Song

Gets the currently playing song.

```
getCurrentSong()
```

---

### Get Music Detail

Get a detail about a song.

```
enum musicDetail {
    'Title',
    'Album',
    'Artist',
    'Album Artist',
    'Genre',
    'Composer',
    'Date Added',
    'Media Kind',
    'Duration',
    'Play Count',
    'Track Number',
    'Disc Number',
    'Album Artwork',
    'Is Explicit',
    'Lyrics',
    'Release Date',
    'Comments',
    'Is Cloud Item',
    'Skip Count',
    'Last Played Date',
    'Rating',
    'File Path',
    'Name',
}

getMusicDetail(variable music, musicDetail detail)
```

---

### Play Music

Set music to play with modes for shuffle and repeat.

```
enum shuffleMode {
    'Off',
    'Songs',
}

enum repeatMode {
    'None',
    'One',
    'All',
}

playMusic(variable music, shuffleMode ?shuffle, repeatMode ?repeat)
```

---

### Select Music

Prompt the user to select music.

```
selectMusic(bool ?selectMultiple = false)
```

## Playback

### Clear Up Next

Clear the queue.

```
clearUpNext()
```

---

### Pause

Press pause.

```
pause()
```

---

### Play

Press play.

```
play()
```

---

### Play Next

Add music to play next in the queue.

```
playNext(variable music)
```

---

### Play Next

Add music to the end of the queue.

```
playLater(variable music)
```

---

### Seek

Seek the currently playing media.

```
enum timerDuration {
    'hr',
    'min',
    'sec',
}

enum seekBehavior {
    'To Time',
    'Forward By',
    'Backward By',
}

seek(number magnitude, timerDuration duration, seekBehavior ?behavior = "To Time")
```

---

### Skip Back

Go to the previous song.

```
skipBack()
```

---

### Skip Forward

Go to the next song.

```
skipFwd()
```

---

### Toggle Play/Pause

```
togglePlayPause()
```

## Playlists

### Add to Playlist

```
addToPlaylist(text playlistName, variable songs)
```

---

### Get Playlist

Gets songs from a playlist

```
getPlaylistSongs(variable playlistName): array
```
