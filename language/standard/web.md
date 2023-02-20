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

```ruby
getArticle(webpage)
```

---

### Get Article Detail

Get `detail` from `article`.

```ruby
getArticleDetail(article,detail)
```

## Giphy

### Search Giphy

Search Giphy for `query`.

```ruby
searchGiphy(query)
```

---

### Get Number of Gifs from Giphy

Get `gifs` number of gifs from Giphy for `query`.

```ruby
getGifs(query,gifs)
```

## RSS

### Get RSS Feed

Get `items` number of items from RSS feed at `url`.

```ruby
getRSS(items,url)
```

---

### Get RSS Feed from URL

Get RSS feeds from urls.

```ruby
getRSSFeeds(urls)
```

## Safari

### Add to Reading List

Add `url` to the users reading list.

```ruby
addToReadingList(url)
```

---

### Get Current URL

Get current web page url.

```ruby
getCurrentURL()
```

---

### Get Webpage Detail

Get `detail` of `webpage`.

```ruby
getWebPageDetail(webpage,detail)
```

#### Details

- Page Contents
- Page Selection
- Page URL
- Name

---

### Open URLs

Open `urls` in default browser.

```ruby
openURLs(urls)
```

---

### Run JavaScript on Current Webpage

Run `script` on currently active tab as JavaScript.

```ruby
runJavaScriptOnWebpage(script)
```

---

### Search the Web

Search the web for `query` using `engine`.

```ruby
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

```ruby
showWebpage(url,useReader)
```

## URLs

### Expand URL

Expand `url`. This is generally used for short urls.

```ruby
expandURL(url)
```

---

### Get Detail of URL

Get `detail` from `url`.

```ruby
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

```ruby
getURLs(input)
```

---

### URL Value

Create url value of `url`. No limit on `url` arguments.

```ruby
url(...url)
```

**Example Usage**

```ruby
url("https://cherrilang.org","https://routinehub.co")
```

## Web Requests

### Download Contents of URL

Download contents of `url`.

```ruby
downloadURL(url)
```

---

### Form Request

Send a `method` request to `url` with `body`.

`body`and `headers` are optional.

```ruby
formRequest(url,method,body,headers)
```

---

### JSON Request

Send a `method` request to `url` with `body`.

`body`and `headers` are optional.

```ruby
jsonRequest(url,method,body,headers)
```

---

### File Request

Send a `method` request to `url` with `body`.

`body`and `headers` are optional.

```ruby
fileRequest(url,method,body,headers)
```

---

### Get Contents of Webpage

Get contents of webpage at `url`.

```ruby
getWebpageContents(url)
```

---

### Get URL Headers

Get headers for `url`.

```ruby
getURLHeaders(url)
```
