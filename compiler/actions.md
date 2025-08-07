---
title: Actions
layout: default
parent: Contributing
nav_order: 4
---

# Defining Actions

## Action Definitions

**Update:** Note that this can be done much more easily using [action definitions](/language/action-definitions). Most standard actions are defined in Cherri files in `/actions/` directory in the project, which can easily be contributed to. However, some actions need additional logic and processing and need to use the more manual method defined below.

## Built-in Definitions

Defining actions is easy, but it might be a little complicated to understand at first. Standard actions are defined in one
place, [`actions_std.go`](https://github.com/electrikmilk/cherri/blob/main/actions_std.go).

Non-standard actions should be added to a new or existing file for those actions.

Actions are added to a map that accepts a key of type `string` and a value of type `actionDefinition`.

An action definition consists of the identifier, the parameter definitions, and an optional `check` function of custom
type `paramCheck` that is called when the action is checked at parsing, and `make` of the custom type `makeParams`
that returns the parameters for the action.

```go
type actionDefinition struct {
	doc                selfDoc
	identifier         string
	appIdentifier      string
	overrideIdentifier string
	parameters         []parameterDefinition
	check              checkFunc
	make               paramsFunc
	decomp             func(action *ShortcutAction) (arguments []string)
	addParams          paramsFunc
	appIntent          appIntent
	outputType         tokenType
	defaultAction      bool // Default action for this identifier during decompilation.
	macOnly            bool
	nonMacOnly         bool
	minVersion         float64
	maxVersion         float64
	setKey             string
	builtin            bool // builtin is based on if the action was in the actions map when it was first initialized.
}
```

All types and helper functions associated with constructing actions and checking parsed argument inputs, etc. are
in [`action.go`](https://github.com/electrikmilk/cherri/blob/main/action.go).

Here is an example of a simple action definition:

```go
actions["takePhoto"] = actionDefinition{
     parameters: []parameterDefinition{
		{
			field:     "showPreview",
			validType: Bool,
			key:     "WFCameraCaptureShowPreview",
			defaultValue: true,
		},
	},
	addParams: func(_ []actionArgument) map[string]any {
		return map[string]any{
			"WFPhotoCount": 1
		}
	},
}
```

All of these options are optional, as long as the key matches the identifier you could have an action definition as simple as:

```go
actions["identifier"] = actionDefinition{}
```

### `appIdentifier`

This sets the base bundle identifier of the action that will be prepended to the `identifier`. By default, this is `is.workflow.actions`, as most standard Shortcuts actions have this base identifier.

This is meant for stock apps not defined in Shortcuts or 3rd-party actions from user-installed apps. 3rd-party actions should be defined in their own Go file outside of `actions_std.go`.

### `overrideIdentifer`

This requires the full bundle identifier. This is used for `rawAction` to allow it to override the identifier completely with the collected identifier string.

### `identifier`

The identifier is the unique ending of the action's `WFWorkflowActionIdentifier`.

The identifier is optional if the key of the item in the `action` map matches it, even in camelCase, as if no `identifier` is defined; not only is the key used instead, but its case will be changed to lowercase.

So there is no need to do the below example, remove the ident property, and the key will be used instead.

```go
// DON'T:
actions["takePhoto"] = actionDefinition{
     identifier: "takephoto",
     // ...
}
```

`identifier` exists so that you can do this:

```go
// DO:
actions["takeMorePhotos"] = actionDefinition{
     identifier: "takephoto",
     // ...
}
```

### `parameters`

Parameters are defined using a `parameterDefinition` for each parameter. It has two main fields, one that defines the argument
`name` for the action, which will be used in error messages. The other defines the valid type for the argument; this is compared against the
value type of the argument received in parsing. This is also used to know the minimum number of arguments for the action. Both of these
checks happen during parsing, right after parsing the arguments for the action.

Parameters correlate almost directly to arguments.

```go
type parameterDefinition struct {
	name         string
	validType    tokenType
	key          string
	defaultValue actionArgument
	optional     bool
	infinite     bool
}
```

The `name` is surface level, and is mainly used as a name for the argument to show in documentation, warnings, and errors.

The `validType` specifies the type that the argument that was entered should match or evaluate to. If a `Variable` type is entered, the type check is much more forgiving and acts more like any type could be entered.

The `key` is used if there is no need to process arguments. If you use `key` to specify the key of this action parameter, do not add a `make` to the action definition, otherwise this is pointless and will be ignored.

The `defaultValue` allows for specifying a default value as an `actionArgument` type. This is used in the case that `optional` is set to `true` to compare the value that was entered to warn the user if the value that they entered for this argument is the same as the default value.

The `optional` determines whether this parameter is completely optional for this action. This defaults to false. It will not write a key value pair for this parameter if it is optional and no argument value is given.

The Shortcuts app does this with many parameters that it has a default value for, if an actions parameter is not specified, it fills in the gap and goes with the default value for that parameter for that action, as defined in the Shortcuts app itself for that action. This should be done when possible, as it makes for a much smaller Shortcut file on average.

The `infinite` determines whether or not the user can enter as many arguments of this definition indefinitely after the first argument.

### `check`

This field takes a `paramCheck` which is a function that accepts a slice of `actionArguments`.

### `make`

This field takes a `makeParams` which is a function that accepts a slice of `actionArguments` and must return a slice
of `plistData`. These usually contain the `argumentValue(key,args,argsIndex)` function, which handles the argument value
based on its definition.

For a variable-only argument, use the `variableInput(key,value)` function. `variableInput(key,value)` is used when a parameter uses an input value, usually with the key `WFInput`, these are parameters whose values must be inserted as a variable value.

You can also obviously directly add a `plistData` value to this slice. This slice will be used as the value of
`WFWorkflowActionParameters` dictionary for the action.

If the action has multiple arguments without a variable-only argument, it's best to return the output of `argumentValues()`
instead. This function takes a reference to the `args` and an unlimited strings argument of the keys for each parameter.

If it is not necessary to process arguments before they are used as parameter values, simply add the key of the argument to the parameter definition like this:

```go
actions["takePhoto"] = actionDefinition{
     parameters: []parameterDefinition{
		{
			name:     "showPreview",
			validType: Bool,
			key: "WFCameraCaptureShowPreview"
			defaultValue: actionArgument{
				valueType: Bool,
				value:     true,
			},
		},
	},
}
```

If you do this, the parameter value for that argument will be done for you; just make sure to not add the `make` property and add the `key` property to each of your parameter definitions. This is done to help make defining actions simpler and faster.

### `addParams`

This is similar to `make`, but instead of determining the parameters output for this action, this only adds to those parameters. This is particularly useful if `make` isn't needed. Still, you need to set hard coded parameters for the action in addition to the automatic parameters set when `make` is not set.

### `outputType`

Sets the output type for this action. This is used to type-check the usage of the output.

### `macOnly`

Sets whether or not this action is a macOS-only action. This is mainly used if `#define mac false` is set, so that we can error out and inform the user they are using a Mac-only action in a non-Mac Shortcut.

### `nonMacOnly`

Sets whether or not this action is a iOS/iPadOS-only action. This is mainly used if `#define mac true` is set, so that we can error out and inform the user they are using a non-macOS-only action in a non-Mac Shortcut.

### `minVersion`

Sets the minimum version this action was added in. This is only relevant if the user sets `#define version 16.2`; for example, if the version set does not exceed our `minVersion`, we will error out and inform the user they are using an action that is not in their target version.

### `setKey`

Set key is used for toggle-set actions, actions whose only function is to toggle or set something in the same format, but sometimes with a different key, hence this property.

---

When contributing actions, if an action has a complex number of arguments, try your best to split the action into
multiple actions to reduce the number of arguments and complexity.
