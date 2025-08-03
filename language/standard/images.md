---
title: Images
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 8
---

# Images Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## GIFs

### Add To GIF

Add a frame to a GIF.

```
addToGIF(variable image, variable gif, text ?delay = "0.25", bool ?autoSize = true, text ?width, text ?height)
```

---

### Get Image Frames

Get frames from a GIF.

```
getImageFrames(variable image)
```

---

### Make GIF

```
makeGIF(variable input, text ?delay = "0.3", number ?loops, text ?width, text ?height)
```

---

### Make Video From GIF

```
makeVideoFromGIF(variable gif, number ?loops = 1)
```

## Image Editing

### Combine Images

```
enum imageCombineMode {
    'Vertically',
    'In a Grid',
}

combineImages(variable images, imageCombineMode ?mode = "Vertically", number ?spacing = 1)
```

---

### Convert Image

Convert image to another format, compression quality, and/or remove metadata.

```
enum convertImageFormats {
    'TIFF',
    'GIF',
    'PNG',
    'BMP',
    'PDF',
    'HEIF',
}

convertImage(variable image, convertImageFormats format, float ?quality, bool ?preserveMetadata = true)
```

---

### Convert to JPEG

Convert image to a JPEG.

```
convertToJPEG(variable image, number ?compressionQuality, bool ?preserveMetadata = true)
```

---

### Crop Image

```
enum cropImagePosition {
    'Center',
    'Top Left',
    'Top Right',
    'Bottom Left',
    'Bottom Right',
    'Custom',
}

cropImage(variable image, text ?width = "100", text ?height = "100", cropImagePosition ?position = "Center", text ?customPositionX, text ?customPositionY)
```

---

### Custom Image Mask

Mask an image with a custom image mask.

```
customImageMask(variable image, variable customMaskImage)
```

---

### Custom Image Overlay

Specify custom image overlay configuration.

```
enum customImageOverlayPosition {
    'Center',
    'Top Left',
    'Top Right',
    'Bottom Left',
    'Bottom Right',
    'Custom',
}

customImageOverlay(variable image, variable overlayImage, text ?width, text ?height, text ?rotation = "0", text ?opacity = "100", customImageOverlayPosition ?position = "Center", text ?customPositionX, text ?customPositionY)
```

---

### Extract Image Text

```
extractImageText(variable image): text
```

---

### Flip Image

```
enum flipImageDirection {
    'Horizontal',
    'Vertical',
}

flipImage(variable image, flipImageDirection direction)
```

---

### Get Image Detail

Get a detail about an image.

```
enum imageDetail {
    'Album',
    'Width',
    'Height',
    'Date Taken',
    'Media Type',
    'Photo Type',
    'Is a Screenshot',
    'Is a Screen Recording',
    'Location',
    'Duration',
    'Frame Rate',
    'Orientation',
    'Camera Make',
    'Camera Model',
    'Metadata Dictionary',
    'Is Favorite',
    'File Size',
    'File Extension',
    'Creation Date',
    'File Path',
    'Last Modified Date',
    'Name',
}

getImageDetail(variable image, imageDetail detail)
```

---

### Get Images

Detect images in input

```
getImages(variable input): array
```

---

### Make Image from Rich Text

```
makeImageFromRichText(variable pdf, text width, text height)
```

---

### Mask Image

Mask an image with another image.

```
enum maskImageType {
    'Rounded Rectangle',
    'Ellipse',
    'Icon',
}

maskImage(variable image, maskImageType type, text ?radius)
```

---

### Overlay Image

Overlay an image on top of another image.

```
overlayImage(variable image, variable overlayImage)
```

---

### Remove Image Background

```
removeBackground(variable image, bool ?crop = false)
```

---

### Resize Image

```
resizeImage(variable image, text width, text ?height)
```

---

### Resize Image By Longest Edge

```
resizeImageByLongestEdge(variable image, text length)
```

---

### Resize Image By Percent

```
resizeImageByPercent(variable image, text percentage)
```

---

### Rotate Media

Rotate an image or a video

```
rotateMedia(variable media, text degrees)
```

---

### Strip Image Metadata

```
stripImageMetadata(variable image)
```
