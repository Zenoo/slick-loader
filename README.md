# Slick Loader

A slick loader to use during your AJAX calls or data processing

### Doc

* **Installation**

Simply import slick-loader into your HTML.
```
<link rel="stylesheet" type="text/css" href="/path/to/slick-loader.css">
<script src="your/Path/js/slick-loader.js"></script>	
```
* **How to use**

All the methods are grouped inside the `LOADER` variable.
```
LOADER.enable();
...
LOADER.disable();
```

* **Methods**
```
LOADER.enable(); // Displays the loader

LOADER.disable(); // Hides the loader

LOADER.setText(line1, line2); // Sets two text lines at the center of the loader

LOADER.clearText(); // Removes the text
```

* **Example**

See this [JSFiddle](https://jsfiddle.net/Zenoo0/91h52q7e/) for a working example

## Authors

* **Zenoo** - *Initial work* - [Zenoo.fr](http://zenoo.fr)
