---
title: Best Practices
layout: default
parent: Documentation
nav_order: 15
---

# Best Practices & Tips
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Efficiency

Notes on creating memory-efficient Shortcuts at runtime in Cherri.

### Clear unused outputs

If an action produces an output you will not use, consider adding the `nothing()` action after it. This will clear the current output, reducing runtime memory.

This is done automatically for statements, such as if/else, menu, etc. to clear their output.

### Pre-defined arrays may be slow

Here is an example of a pre-defined array.

```ruby
@someArray = ["Test", 5, {}, 8]
```

Let's go over what's happening in the preview.

We use the **Set Variable** action to set the variable `someArray` with no value.

Then, for each value, we will create the appropriate action and input it into an **Add to Variable** action to add that value to the variable `someArray`.

Even though it's not explicit, the value of the `someArray` variable is now an array. It will now treat the variable as having multiple values. You would be able to use the `for` statement with `someArray` for instance.

However, unless you are unable to use a dictionary (which you can trust will be faster), be careful declaring large pre-defined arrays.

Shortcuts will run a Dictionary action and move on, but for an array, Shortcuts will need to run through adding each value you have pre-defined for the array to contain to the assigned variable. Depending on if you have large pre-defined values (multiple dictionaries, etc.) and how many of them you have, this may impact runtime performance.

To be clear, this does not at all impact creating an empty array and then later in your Shortcut adding values to it, this is primarily to address pre-defined top of Shortcut arrays or adding to an array that already exists at the top of your Shortcut, as your Shortcut may then take slightly longer to start or perform actions while adding a lot of items to an array that you pre-defined.

## Small Shortcut File Size

Notes on reducing the action count and file size of compiled Shortcuts.

### Use constants

Using constants when applicable allows you to reference the output of an action instead of assigning it to a variable. For every variable you never mutate the value of, you can reduce your Shortcut by 1 action. This is not a lot if you have one variable, but it adds up the more variables you add to a Shortcut.

```ruby
const immutable = 5
show("{immutable}")
```

Setting a value that will never change to a variable uses more actions and likely more memory at runtime to store the variable. Use the existing output of an action, do not assign it to a variable unless you will need to modify the output.

```ruby
@mutable = 5
show("Number result: {mutable}")
```

### Default or optional values

If an action has an optional argument and/or default value, avoid filling it in unless you need to specify a value. If you must fill it in with its default value to set the value of an argument after it, use `nil` as the value instead. This will prevent the parameter from being set with any default value, resulting in a smaller Shortcut.

Keep in mind, that setting the value of an action argument to `nil` or not setting it if it has a default value or is optional, depending on the parameter, does not mean that the value for that argument will be empty in the Shortcut, but rather that it will use the default value for that argument.

## Fast compilation

Notes on ensuring your Cherri code compiles as quickly as possible.

### Declare variable value types without empty typed values

Whenever possible when declaring variables with empty values, rather than setting an empty value either do not set any value or type, set it to `nil`, or declare the type of the variable value.

```ruby
/* slowest, sets empty value of type */
@text = ""
@array = []
@dict = {}

/* faster, set the type of the variable with an empty value */
@textVar: text

/* explicitly sets the value to empty if you like, but no value type has been set */
@var = nil

/* fastest, but no value type set */
@var
```

### Use raw text when possible

[Raw text](types#raw-text) literals compile faster than standard text literals because they skip string interpolation other than escaped single quotes. They can be used as a substitute anywhere text can be used, and other than those limitations on contents should behave identically.
