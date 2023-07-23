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
runJavaScriptOnWebpage(script)
```

---

### Search the Web

Search the web for `query` using `engine`.

```
searchWeb(engine,query)
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

Show `url`. `urlReader` is a boolean, the default is `true`.

```
showWebpage(url,useReader)
```

## URLs

### Expand URL

Expand `url`. This is generally used for short urls.

```
expandURL(url)
```

---

### Get Detail of URL

Get `detail` from `url`.

```
getURLDetail(url,detail)
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

Get urls from `input`.

```
getURLs(input)
```

---

### URL Value

Create url value of `url`. No limit on `url` arguments.

```
url(...url)
```

**Example Usage**

```
url("https://cherrilang.org","https://routinehub.co")
```

## Web Requests

### Download Contents of URL

Download contents of `url`.

```
downloadURL(url)
```

---

### Form Request

Send a `method` request to `url` with `body`.

`body`and `headers` are optional.

```
formRequest(url,method,body,headers)
```

---

### JSON Request

Send a `method` request to `url` with `body`.

`body`and `headers` are optional.

```
jsonRequest(url,method,body,headers)
```

---

### File Request

Send a `method` request to `url` with `body`.

`body`and `headers` are optional.

```
fileRequest(url,method,body,headers)
```

---

### Get Contents of Webpage

Get contents of webpage at `url`.

```
getWebpageContents(url)
```

---

### Get URL Headers

Get headers for `url`.

```
getURLHeaders(url)
```
