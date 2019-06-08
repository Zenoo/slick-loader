# Slick Loader

A slick loader to use during your AJAX calls or data processing

![Loader demo](https://rawgit.com/Zenoo/slick-loader/master/loader.gif "Loader demo")


### Doc

* **Installation**

Simply import slick-loader into your HTML.
```
<link rel="stylesheet" type="text/css" href="https://unpkg.com/slick-loader@1.1.20/slick-loader.min.css">
<script src="https://unpkg.com/slick-loader@1.1.20/slick-loader.min.js"></script>	
```
* **Documentation**

See the offical [documentation](https://zenoo.github.io/slick-loader/Slickloader.html) for more in-depth informations.

* **How to use**

You can either use the default `SlickLoader` or create a `new Slickloader(target)` to target your loading more precisely.
```
SlickLoader.enable();
...
SlickLoader.disable();
// OR
let customLoader = new Slickloader().enable()
...
customLoader.disable();
```

* **Methods**
```
SlickLoader.enable(); // Displays the loader

SlickLoader.disable(); // Hides the loader

SlickLoader.setText(line1, line2); // Sets two text lines at the center of the loader

SlickLoader.clearText(); // Removes the text

SlickLoader.destroy(selector); // Removes the SlickLoader
```

* **Example**

See this [JSFiddle](https://jsfiddle.net/Zenoo0/91h52q7e/) for a working example

## Authors

* **Zenoo** - *Initial work* - [Zenoo.fr](http://zenoo.fr)
