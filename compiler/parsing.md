---
title: Parsing
layout: default
parent: Contributing
nav_order: 4
---

# Parsing

The input file is parsed entirely at once character by character. Lines are counted when advanced to a line feed
character. The current character is stored as a `rune`. If we have run out of characters, the current character is set
to `-1`, and many loops are set to stop when this happens.

Tokens are typed `tokenType` which is a string type.

```go
const Var tokenType = "@"
```

## Helper functions

### `advance()`

This moves the current character forward.

A sub-function for this function is `advanceTimes(times int)`. This just runs this function as many times as you
specify,
say if you need to move forward 2 characters, for example.

### `tokenAhead(token tokenType) bool`

This is meant to be used in an if/else or switch case statement. For example:

```go
if tokenAhead(Var) {
    // ...
}
```

If the token `Var` is in the upcoming characters, this function will return true and advance past those characters plus
one to account for spaces so that this function can be chained.

A helpful alias for this function is `tokensAhead(v ...tokenType) bool`. This allows for checking if one of the tokens
given is ahead instead of doing `tokenAhead(...) || tokenAhead(...) || ...`, etc.

### `isChar(tokenChar rune)`

This checks if the current character is the given token rune and if so returns true and advances one character. This is done so that it can be used as a conditional and automatically advance just like with `tokenAhead()`.

### `lookAheadUntil(until rune)`

This does not advance characters but pseudo-collects characters until it reaches the character specified or runs out of characters, and then returns the characters it collected. This can be used to see if a character or token exists ahead without moving there.

### `collectUntil(until rune)`

This function will collect characters until it reaches the character specified or runs out of characters and then returns the characters it
collected. Any spaces will be stripped from the value it collects.

### `collectValue(valueType *tokenType, value *any, until rune)`

This takes pointers to a type and a value, and a character to collect until. This will collect the value ahead and
return its type and value.

It uses these functions to collect the detected value. Actions, variables, and globals are collected on the spot by this
function, however.

- `collectString()`
- `collectInteger()`
- `collectArray()`
- `collectDictionary()`

### `next(mov int)` && `prev(mov int)`

These pseudo move forward or backward `mov` times and return the character at that position. Unlike `tokenAhead()`, you
will need to manually move ahead, this is mainly to check if the next or previous character is something, then doing
something with that knowledge.

### `getChar(atIndex int)`

Returns the character at the specified index in the file's entire characters.

## Error handling

### `parserError(message string)`

Prints `message` along with the current line and column number.

The line and column number will be used to print the line with the error and point to the column where we stopped parsing.

### `makeKeyList(title string, list map[string]string) string`

This quickly creates a list based on a `map[string]string` useful for printing out a map of expected values.

## Debugging functions

### `printChar(rune)`

This will print out the current character but also print out the names of the common invisible characters like tab, space, and line feed (new line).
