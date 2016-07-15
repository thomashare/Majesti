[logo]: https://camo.githubusercontent.com/ee2eeb9e563705d6cd4966748fafdf34ce8143a6/68747470733a2f2f7333322e706f7374696d672e6f72672f77696b7169727439312f6d616a657374695f6c6f676f2e706e67

#![Majesti logo][logo] Majesti
__A beautiful web development framework.__  
Majesti was created to provide a starter template for web developers that uses the most legible preprocessors available - Streamlined with the help of [Gulp](http://gulpjs.com) and [Browsersync](https://www.browsersync.io).  
**Majesti** uses [Stylus](http://stylus-lang.com), [Pug](http://jade-lang.com), [CSS-Nano](http://cssnano.co), [Autoprefixer](https://github.com/postcss/autoprefixer), [Coffeescript](http://coffeescript.org/), [Uglify](https://github.com/mishoo/UglifyJS) and [Svg2png](https://github.com/domenic/svg2png) to speed up your workflow and get things done.

###Basic Guide
Installation is simple. Either clone or download to the directory you want to place your site. Rename the folder to the name of your project.

You will have these files:
```
Majesti
  |  gulpfile.js
  |  README.md
  |  /static
  |  /templates
```
Open _gulpfile.js_ with your text editor and change the ``serverAddress`` variable to point to the location of your local server.

1. Using Terminal or git bash, change directory to your project folder location and type "``npm install``" and hit Enter to install the necessary node modules.

2. When all of the node modules are finished installing, you can start the proxy server and file watcher by typing "``gulp``" and hitting Enter.

Allow the gulp command to keep running while you develop your site.  
Anytime you wish to restart development, repeat the above steps.

**Majesti** will do all of the preprocessing and compression for you. Allowing you to focus on the important stuff.
___
####Features
- **Majesti** will convert your stylus files to css and add add the browser prefixes where necessary.
- Converts all template pug files to html files and places them in the root directory.
- Optimizes all svg files placed or saved in the static/svg folder.
- Converts each svg file placed or saved in the static/svg folder to a png file and places it in the static/img folder.
- Converts each coffee file placed or saved in the static/coffee folder to a js file and places it in the static/js folder.
- Optimizes all js files placed or saved in the static/js folder.