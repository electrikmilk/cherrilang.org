# Contributing

Before making any contributions unless contributing documentation for an action, familiarize yourself with how the Cherri programming language generally works for writing language documentation,
and how the compiler works on a deeper level for compiler documentation.

## Action documentation

Note that a branch of the compiler is being worked on to do automatic documentation of actions,
this is partially to have descriptions of how actions work be available in the `--actions=` search in the compiler,
but also to allow action documentation to be generated as it's easier to add more actions if you don't have to worry
about formatting the documentation and placing them in the right category, etc.

### Generating action signatures

Use the `--action` shell argument in the compiler with the action name that needs to be documented.
This will output the signature of the action with the correct type for each argument for you instead of having to write
out the format yourself, especially when it comes to multiple arguments, and maybe some of them are optional.

```console
> cherri --action=base64Encode
base64Encode(variable encodeInput)
```

---

## Human language policy

Write documentation in plain standard technical English and maintain a professional technical tone to the best of your ability.
