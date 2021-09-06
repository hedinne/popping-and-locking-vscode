import fs from "fs";
import Color from "tinycolor2";

const background = "#21222d";
const warm = "#f2e5bc";

const red = "#cc241d";
const redBright = "#f42c3e";
const magenta = "#b16286";
const magentaBright = "#d3869b";

const blue = "#458588";
const blueBright = "#99c6ca";
const cyan = "#689d6a";
const cyanBright = "#7ec16e";
const green = "#98971a";
const greenBright = "#b8bb26";
const yellow = "#d79921";
const yellowBright = "#fabd2f";

const black = "#000000";
const blackBright = "#1f1d1d";
const white = "#f2e5bc";

var c = {
  warm: {
    main: new Color(warm).desaturate(10).toHexString(),
    bright: new Color(warm).lighten(5).toHexString(),
  },
  cool: {
    comment: new Color(background)
      .lighten(35)
      .saturate(15)
      .spin(-10)
      .toHexString(),
  },
  background: {
    main: new Color(background).darken(1).toHexString(),
    bright: new Color(background).lighten(5).toHexString(),
    brighter: new Color(background).lighten(15).toHexString(),
    dark: new Color(background).darken(4).toHexString(),
    darker: new Color(background).saturate(20).darken(8).toHexString(),
    saturated: new Color(background).lighten(10).saturate(5).toHexString(),
  },
  black: {
    main: new Color(black).toHexString(),
    bright: new Color(blackBright).toHexString(),
  },
  red: {
    main: new Color(red).toHexString(),
    bright: new Color(redBright).toHexString(),
    desaturated: new Color(red).desaturate(40).brighten(10).toHexString(),
  },
  yellow: {
    main: new Color(yellow).toHexString(),
    bright: new Color(yellowBright).toHexString(),
  },
  blue: {
    main: new Color(blue).toHexString(),
    bright: new Color(blueBright).toHexString(),
  },
  magenta: {
    main: new Color(magenta).toHexString(),
    bright: new Color(magentaBright).toHexString(),
  },
  green: {
    main: new Color(green).toHexString(),
    bright: new Color(greenBright).toHexString(),
  },
  cyan: {
    main: new Color(cyan).toHexString(),
    bright: new Color(cyanBright).toHexString(),
  },
  white: {
    main: new Color(white).toHexString(),
    bright: new Color(white).lighten(0.5).toHexString(),
  },
};

const theme = {
  name: "Popping and Locking Remastered",
  type: "dark",
  semanticHighlighting: true,
  semanticTokenColors: {},
  colors: {
    // Base
    focusBorder: c.background.brighter,
    foreground: c.warm.main,
    "icon.foreground": c.yellow.bright,
    // widget.shadow: Unset
    //"selection.background": TODO
    //"descriptionForeground": TODO
    //"errorForeground": TODO

    // "window.activeBorder": Unset,

    // Editor
    "editor.background": c.background.main,
    "editor.foreground": c.warm.main,

    // Icon bar
    "activityBarBadge.background": c.yellow.main,
    "activityBarBadge.foreground": c.background.dark,
    "activityBar.background": c.background.dark,
    "activityBar.foreground": c.yellow.bright,
    "activityBar.dropBorder": c.green.main,

    // Files tree
    "sideBarTitle.foreground": c.warm.main,
    "sideBar.background": c.background.dark,
    "sideBar.foreground": c.warm.bright,
    "sideBarSectionHeader.background": c.background.dark,
    "list.activeSelectionBackground": c.background.main,
    "list.inactiveSelectionBackground": c.background.saturated,
    "list.hoverBackground": c.background.darker,
    "list.focusBackground": c.background.bright,
    "list.dropBackground": c.background.saturated,
    "list.errorForeground": c.red.desaturated,
    "list.warningForeground": c.warm.main,
    "listFilterWidget.background": c.red.bright,
    "listFilterWidget.outline": c.red.bright,
    "tree.indentGuidesStroke": c.background.bright,

    "gitDecoration.modifiedResourceForeground": c.blue.bright,
    "gitDecoration.untrackedResourceForeground": c.cyan.bright,
    "gitDecoration.ignoredResourceForeground": c.cool.comment,
    "gitDecoration.conflictingResourceForeground": c.red.bright,

    // Terminal
    "terminal.ansiBlack": c.black.main,
    "terminal.ansiBrightBlack": c.black.bright,
    "terminal.ansiRed": c.red.main,
    "terminal.ansiBrightRed": c.red.bright,
    "terminal.ansiGreen": c.green.main,
    "terminal.ansiBrightGreen": c.green.bright,
    "terminal.ansiYellow": c.yellow.main,
    "terminal.ansiBrightYellow": c.yellow.bright,
    "terminal.ansiBlue": c.blue.main,
    "terminal.ansiBrightBlue": c.blue.bright,
    "terminal.ansiMagenta": c.magenta.main,
    "terminal.ansiBrightMagenta": c.magenta.bright,
    "terminal.ansiCyan": c.cyan.main,
    "terminal.ansiBrightCyan": c.cyan.bright,
    "terminal.ansiWhite": c.white.main,
    "terminal.ansiBrightWhite": c.white.bright,
    "terminal.foreground": c.warm.main,
    "terminal.background": c.background.main,

    // Bracket
    "editorBracketHighlight.foreground1": c.red.main,
    "editorBracketHighlight.foreground2": c.magenta.main,
    "editorBracketHighlight.foreground3": c.blue.main,
    "editorBracketHighlight.foreground4": c.cyan.main,
    "editorBracketHighlight.foreground5": c.green.main,
    "editorBracketHighlight.foreground6": c.yellow.main,
    "editorBracketHighlight.unexpectedBracket.foreground": c.warm.main,
  },
  tokenColors: [
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        fontStyle: "italic",
        foreground: c.cool.comment,
      },
    },
    {
      name: "Variables",
      scope: ["variable", "string constant.other.placeholder"],
      settings: {
        foreground: c.blue.bright,
      },
    },
    {
      name: "Colors",
      scope: ["constant.other.color"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Invalid",
      scope: ["invalid", "invalid.illegal"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Keyword, Storage",
      scope: ["keyword", "storage.type", "storage.modifier"],
      settings: {
        foreground: c.blue.main,
      },
    },

    {
      name: "Operator, Misc",
      scope: [
        "keyword.control",
        "constant.other.color",
        "punctuation",
        "meta.tag",
        "punctuation.definition.tag",
        "punctuation.separator.inheritance.php",
        "punctuation.definition.tag.html",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.section.embedded",
        "keyword.other.template",
        "keyword.other.substitution",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Tag",
      scope: ["entity.name.tag", "meta.tag.sgml", "markup.deleted.git_gutter"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Function, Special Method",
      scope: [
        "entity.name.function",
        "meta.function-call",
        "variable.function",
        "support.function",
        "keyword.other.special-method",
      ],
      settings: {
        foreground: c.yellow.bright,
      },
    },
    {
      name: "Block Level Variables",
      scope: ["meta.block variable.other"],
      settings: {
        foreground: c.blue.bright,
      },
    },
    {
      name: "Other Variable, String Link",
      scope: ["support.other.variable", "string.other.link"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
      scope: [
        "constant.numeric",
        "constant.language",
        "support.constant",
        "constant.character",
        "constant.escape",
        "variable.parameter",
        "keyword.other.unit",
        "keyword.other",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "String, Symbols, Inherited Class, Markup Heading",
      scope: [
        "string",
        "constant.other.symbol",
        "constant.other.key",
        "entity.other.inherited-class",
        "markup.heading",
        "markup.inserted.git_gutter",
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Class, Support",
      scope: [
        "entity.name",
        "support.type",
        "support.class",
        "support.other.namespace.use.php",
        "meta.use.php",
        "support.other.namespace.php",
        "markup.changed.git_gutter",
        "support.type.sys-types",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Entity Types",
      scope: ["support.type"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "CSS Class and Support",
      scope: [
        "source.css support.type.property-name",
        "source.sass support.type.property-name",
        "source.scss support.type.property-name",
        "source.less support.type.property-name",
        "source.stylus support.type.property-name",
        "source.postcss support.type.property-name",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Sub-methods",
      scope: [
        "entity.name.module.js",
        "variable.import.parameter.js",
        "variable.other.class.js",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Language methods",
      scope: ["variable.language"],
      settings: {
        fontStyle: "italic",
        foreground: "#999999",
      },
    },
    {
      name: "entity.name.method.js",
      scope: ["entity.name.method.js"],
      settings: {
        fontStyle: "italic",
        foreground: "#999999",
      },
    },
    {
      name: "meta.method.js",
      scope: [
        "meta.class-method.js entity.name.function.js",
        "variable.function.constructor",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Attributes",
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "HTML Attributes",
      scope: [
        "text.html.basic entity.other.attribute-name.html",
        "text.html.basic entity.other.attribute-name",
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#999999",
      },
    },
    {
      name: "CSS Classes",
      scope: ["entity.other.attribute-name.class"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "CSS ID's",
      scope: ["source.sass keyword.control"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Inserted",
      scope: ["markup.inserted"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Deleted",
      scope: ["markup.deleted"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Changed",
      scope: ["markup.changed"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Regular Expressions",
      scope: ["string.regexp"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Escape Characters",
      scope: ["constant.character.escape"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "URL",
      scope: ["*url*", "*link*", "*uri*"],
      settings: {
        fontStyle: "underline",
      },
    },
    {
      name: "Decorators",
      scope: [
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js",
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#999999",
      },
    },
    {
      name: "ES7 Bind Operator",
      scope: [
        "source.js constant.other.object.key.js string.unquoted.label.js",
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#999999",
      },
    },
    {
      name: "JSON Key - Level 0",
      scope: [
        "source.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "JSON Key - Level 1",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "JSON Key - Level 2",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "JSON Key - Level 3",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "JSON Key - Level 4",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "JSON Key - Level 5",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "JSON Key - Level 6",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "JSON Key - Level 7",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "JSON Key - Level 8",
      scope: [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markdown - Plain",
      scope: [
        "text.html.markdown",
        "punctuation.definition.list_item.markdown",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markdown - Markup Raw Inline",
      scope: ["text.html.markdown markup.inline.raw.markdown"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markdown - Markup Raw Inline Punctuation",
      scope: [
        "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markdown - Heading",
      scope: [
        "markdown.heading",
        "markup.heading | markup.heading entity.name",
        "markup.heading.markdown punctuation.definition.heading.markdown",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markup - Italic",
      scope: ["markup.italic"],
      settings: {
        fontStyle: "italic",
        foreground: "#999999",
      },
    },
    {
      name: "Markup - Bold",
      scope: ["markup.bold", "markup.bold string"],
      settings: {
        fontStyle: "bold",
        foreground: "#999999",
      },
    },
    {
      name: "Markup - Bold-Italic",
      scope: [
        "markup.bold markup.italic",
        "markup.italic markup.bold",
        "markup.quote markup.bold",
        "markup.bold markup.italic string",
        "markup.italic markup.bold string",
        "markup.quote markup.bold string",
      ],
      settings: {
        fontStyle: "bold",
        foreground: "#999999",
      },
    },
    {
      name: "Markup - Underline",
      scope: ["markup.underline"],
      settings: {
        fontStyle: "underline",
        foreground: "#999999",
      },
    },
    {
      name: "Markdown - Blockquote",
      scope: ["markup.quote punctuation.definition.blockquote.markdown"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markup - Quote",
      scope: ["markup.quote"],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown - Link",
      scope: ["string.other.link.title.markdown"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markdown - Link Description",
      scope: ["string.other.link.description.title.markdown"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markdown - Link Anchor",
      scope: ["constant.other.reference.link.markdown"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markup - Raw Block",
      scope: ["markup.raw.block"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markdown - Raw Block Fenced",
      scope: ["markup.raw.block.fenced.markdown"],
      settings: {
        foreground: "#00000050",
      },
    },
    {
      name: "Markdown - Fenced Bode Block",
      scope: ["punctuation.definition.fenced.markdown"],
      settings: {
        foreground: "#00000050",
      },
    },
    {
      name: "Markdown - Fenced Bode Block Variable",
      scope: [
        "markup.raw.block.fenced.markdown",
        "variable.language.fenced.markdown",
        "punctuation.section.class.end",
      ],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markdown - Fenced Language",
      scope: ["variable.language.fenced.markdown"],
      settings: {
        foreground: "#999999",
      },
    },
    {
      name: "Markdown - Separator",
      scope: ["meta.separator"],
      settings: {
        fontStyle: "bold",
        foreground: "#999999",
      },
    },
    {
      name: "Markup - Table",
      scope: ["markup.table"],
      settings: {
        foreground: "#999999",
      },
    },
  ],
};

let data = JSON.stringify(theme, undefined, 2);
fs.writeFileSync(
  "extension/themes/popping-and-locking-remastered-color-theme.json",
  data
);
