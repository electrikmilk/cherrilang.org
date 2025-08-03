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

### Open Custom X-Callback URL

```
openCustomXCallbackURL(text url, text ?successKey, text ?cancelKey, text ?errorKey, text ?successURL)
```

## Articles

### Get Article

Get article from webpage.

```
getArticle(text webpage)
```

---

### Get Article Detail

Get a detail about an article.

```
getArticleDetail(variable article, text detail)
```

## Giphy

### Get GIFs from Giphy

Gets a number of GIFs from Giphy for a search query.

```
getGifs(text query, number ?gifs = 1)
```

---

### Search Giphy

Gets GIFs from Giphy for a search query.

```
searchGiphy(text query)
```

## HTTP

### Download URL

Download the contents of a URL.

```
downloadURL(text url, dictionary ?headers)
```

---

### File Request

Send a `method` file request to `url` with `body` and optional `headers.

```
enum HTTPMethod {
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
}

fileRequest(text url, HTTPMethod ?method, dictionary ?body, dictionary ?headers)
```

---

### Form Request

Send a `method` request to `url` with `body` and optional `headers.

```
enum HTTPMethod {
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
}

formRequest(text url, HTTPMethod ?method, dictionary ?body, dictionary ?headers)
```

---

### JSON Request

Send a `method` JSON request to `url` with `body` and optional `headers.

```
enum HTTPMethod {
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
}

jsonRequest(text url, HTTPMethod ?method, dictionary ?body, dictionary ?headers)
```

## RSS

### Get RSS

Get RSS feed contents at URL. Limited by number of items.

```
getRSS(number items, text url)
```

---

### Get RSS Feeds

Get feeds from multiple URLs.

```
getRSSFeeds(text urls)
```

## Safari

### Add to Reading List

Add a link to the reading list.

```
addToReadingList(text ...url)
```

---

### Get Current URL

Get current URL in Safari.

```
getCurrentURL()
```

---

### Get Webpage Contents

Get contents of Webpage from Safari.

```
getWebpageContents(text url)
```

---

### Get Webpage Detail

Get a detail about a provided webpage.

```
enum webpageDetail {
    'Page Contents',
    'Page Selection',
    'Page URL',
    'Name',
}

getWebPageDetail(variable webpage, webpageDetail detail)
```

---

### Run JavaScript on Webpage

Run some custom JavaScript on the current webpage in Safari.

```
runJavaScriptOnWebpage(text javascript)
```

---

### Search Web

Search the web using a provided search engine and query.

```
enum searchEngine {
    'Amazon',
    'Bing',
    'DuckDuckGo',
    'eBay',
    'Google',
    'Reddit',
    'Twitter',
    'Yahoo!',
    'YouTube',
}

searchWeb(searchEngine engine, text query)
```

---

### Show Webpage

Show webpage using Safari.

```
showWebpage(text url, bool ?useReader)
```

## URLs

### Expand URL

Get the expanded version of a URL. For instance, returns the full URL for a short URL, or the URL which a URL immediately redirects to, etc.

```
expandURL(text url)
```

---

### Get URL Detail

Get a detail about a URL.

```
enum URLDetail {
    'Scheme',
    'User',
    'Password',
    'Host',
    'Port',
    'Path',
    'Query',
    'Fragment',
}

getURLDetail(text url, URLDetail detail)
```

---

### Get URL Headers

Get the headers from a URL.

```
getURLHeaders(text url)
```

---

### Get URLs

Get URLs from `input`.

```
getURLs(text input): array
```

---

### Open URL

Open URL in default browser.

```
openURL(text url)
```

---

### Open X-Callback URL

```
openXCallbackURL(text url)
```

---

### URL

Create a URL value.

```
url(text ...url)
```

---

### URL Decode

Decode text from URL encoding.

```
urlDecode(text input): text
```

---

### URL Encode

Encode text for a URL.

```
urlEncode(text input): text
```
