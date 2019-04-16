# README

## About

This theme is designed to have vivid colors to capture youre attension yet be
easy on the eyes. Originally based on the color theme VS Dark+, Gruvbox Dark and
One Dark but has changed a lot since. It is designed for web languages (HTML,
CSS, JS and more).

## Tips for modifying the theme.

- `tmTheme` is not being used since I think the default VS Dark+ works better
  for syntax highlighting & (seems to) require fewer configurations
- In the `json` file, `scope` can be an `array` or a `string` of CSS classes
- VSCode's dev tools (`Help > Toggle Developer Tools`) is very helpful to find
  out the scopes.
- https://code.visualstudio.com/docs/getstarted/theme-color-reference
- https://www.sublimetext.com/docs/3/scope_naming.html

## Related customization

### Colors for Bracket Pair Colorizer

```json
  "bracketPairColorizer.consecutivePairColors": [
    "()",
    "[]",
    "{}",
    ["#cc241d", "#b16286", "#458588", "#689d6a", "#98971a", "#d79921"],
    "#f2e5bc"
  ]
```

### Popping and Locking for Hyper

https://www.npmjs.com/package/hyper-popping-and-locking

## If you have any questions or comments.

Please contact me. https://github.com/hedinne/popping-and-locking-vscode

## Orignally based on

- https://github.com/hedinne/popping-and-locking-vscode
  - https://github.com/morhetz/gruvbox
  - https://github.com/jdinhlife/vscode-theme-gruvbox
