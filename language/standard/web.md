---
title: Web
layout: default
grand_parent: Documentation
parent: Actions
nav_order: 8
---

# Web Actions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Articles

### Get Article from Webpage

Get article from `webpage` in article.

```
getArticle(string webpage)
```

---

### Get Article Detail

Get `detail` from `article`.

```
getArticleDetail(variable article, string detail)
```

## Giphy

### Search Giphy

Search Giphy for `query`.

```
searchGiphy(string query)
```

---

### Get Number of Gifs from Giphy

Get `gifs` number of gifs from Giphy for `query`.

```
getGifs(string query, integer ?gifs = 1)
```

## RSS

### Get RSS Feed

Get `items` number of items from RSS feed at `url`.

```
getRSS(integer items, string url)
```

---

### Get RSS Feed from URL

Get RSS feeds from urls.

```
getRSSFeeds(string urls)
```

## Safari

### Add to Reading List

Add `url` to the users reading list.

```
addToReadingList(string url)
```

---

### Get Current URL

Get current web page url.

```
getCurrentURL()
```

---

### Get Webpage Detail

Get `detail` of `webpage`.

```
getWebPageDetail(variable webpage, enum detail)
```

#### Details

- Page Contents
- Page Selection
- Page URL
- Name

---

### Open URLs

Open `url` in default browser. Accepts a variable containing multiple URLs.

```
openURL(string url)
```

---

### Run JavaScript on Current Webpage

Run `script` on currently active tab as JavaScript.

```
runJavaScriptOnWebpage(string script)
```

---

### Search the Web

Search the web for `query` using `engine`.

```
searchWeb(enum engine, string query)
```

#### Engines

- Amazon
- Bing
- DuckDuckGo
- eBay
- Google
- Reddit
- Twitter
- Yahoo!
- YouTube

---

### Show Webpage

Show the webpage at `url`, optionally with Safari reader enabled.

```
showWebpage(string url, boolean ?useReader)
```

## URLs

### Expand URL

Expand `url`. This is generally used for short urls.

```
expandURL(string url)
```

---

### Get Detail of URL

Get `detail` from `url`.

```
getURLDetail(string url, enum detail)
```

#### Details

- Scheme
- User
- Password
- Host
- Port
- Path
- Query
- Fragment

---

### Get URLs from Input

Get URLs from `input`.

```
getURLs(variable input)
```

---

### URL Value

Create url value of `url`. No limit on `url` arguments.

```
url(string ...url)
```

**Example Usage**

```
url("https://cherrilang.org","https://routinehub.co")
```

## Web Requests

### Download Contents of URL

Download contents of `url`.

```
downloadURL(string url, dictionary ?headers)
```

---

### Form Request

Send a `method` request to `url` with `body`.

```
formRequest(string url, enum ?method = "GET", variable ?body, dictionary ?headers)
```

#### Methods:

- GET
- POST
- PUT
- PATCH
- DELETE

---

### JSON Request

Send a `method` JSON request to `url` with `body`.

```
jsonRequest(string url, enum ?method = "GET", variable ?body, dictionary ?headers)
```

---

### File Request

Send a `method` file request to `url` with `body`.

```
fileRequest(string url, enum ?method = "GET", variable ?body, dictionary ?headers)
```

---

### Get Contents of Webpage

Get contents of webpage at `url`.

```
getWebpageContents(string url)
```

---

### Get URL Headers

Get headers for `url`.

```
getURLHeaders(string url)
```
