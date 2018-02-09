---
layout: post
title: Sketch Gists — Useful snippets for plugin development
description:
image: assets/images/sketch-gists.png
permalink: :categories/:title/
categories: Blog
---

Last week I was developing an internal tool to create a design workflow for my workplace. The process involved creating a style guide for a new project by setting up the branding colours, typefaces, shadows and scrim. All went well until it was required to convert the text layers into symbols so as to generalise them as well.

## Problem

If you use a text layer in a symbol, you can only override only the text; not any other property including font colour or weight.
This makes the symbol not so customisable. For example, you’d have to create multiple types of alert messages instead of just one where you can change the icon and colour.

## Solution

Until Sketch releases an update where you override all the properties in a text layer it would be good to convert all your text styles into text symbols and use them in your other symbols.
In this article, I would share some snippets which acted as utils in my project. I kept these methods in a utils.js file and imported it by adding an import statement on top my main script.

`@import ‘utils.js’`


### Finding page, layer or symbol

<script src="https://gist.github.com/sahildave/9ecf7ba5e96a35f6575f9c7a073e659c.js"></script>

First method is generic, where a list and a key is taken as parameters and name of every element is compared with it. If there is a match, the same item is returned. The other functions are the following:

1. `findLayerByName` takes the artboard as the parameter and iterates over the `artboard.layers()` list.
2. `findPageByName` the pages parameter can be fetched from the document by using `doc.pages()`.
3. `findSymbolByName` list of symbols can be obtained by, again, using the document. The `getSymbols(doc)` function looks like this.

``` javascript
/**
 * Get all the symbols for a document.
 * @param {MSDocument} doc
 * @return {NSArray}
 */
function getSymbols(doc) {
 return doc.documentData().allSymbols();
}
```

### Creating Artboard, Page, TextLayer & Symbol

<script src="https://gist.github.com/sahildave/9192956b791d57e5af9f64821d5b04c6.js"></script>

1. The `createArtboard` function is self explanatory. It creates a new `MSArtboardGroup`, sets its name, geometry and adds it to the current page. This can be made even more generic by taking the page as a parameter.
2. There are two types of `createPage` functions. First creates a new page and adds it to the document data. Important step is to call `doc.loadLayerListPanel()` after you add the page, otherwise the page won’t appear on the left unless you collapse and expand the page list.
The second function creates a blank page and renames it, as simple as that.
3. Creating text layer also follows the same trend. One thing to remember is to add it to a page by `page.addLayers([layer]);`.
4. Creating symbol from layer is a bit verbose. You take in a page, layer and the symbol name; add the layer to the page, convert the same layer to a new symbol, move this new symbol to the symbols page and remove the original symbol instance (which was added to the page).
If you pass false in the third parameter of the call: `MSSymbolCreator. createSymbolFromLayers_withName_onSymbolsPage(layers, symbolName, true);` it would be added to the current page.

### Show symbols page, get all symbols, get last symbol

<script src="https://gist.github.com/sahildave/0533d4cae6e5280d3c1e69c4ae9830d2.js"></script>

Frankly, only the third function `getBottomSymbol` is the interesting function in this gist. It compares the position of the symbols and use the compare function to return the appropriate integer. Comments are added to help you out.

I am now planning to release my workflow as a plugin. It essentially would help you out to set a theme for your project. It has inbuilt palette and typeface generator.

---

This post originally appeared [here](https://medium.com/sketch-app-sources/sketch-gists-useful-snippets-for-plugin-development-1-3-214a77097142) on Medium
