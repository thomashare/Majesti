[logo]: https://camo.githubusercontent.com/ee2eeb9e563705d6cd4966748fafdf34ce8143a6/68747470733a2f2f7333322e706f7374696d672e6f72672f77696b7169727439312f6d616a657374695f6c6f676f2e706e67

# ![Majesti logo][logo] Majesti  
__A beautiful web development framework.__  
Majesti was created to provide a starter template for web developers that uses the most legible preprocessors available - Streamlined with the help of [Gulp](http://gulpjs.com) and [Browsersync](https://www.browsersync.io).

**Majesti** uses [Gulp](http://gulpjs.com), [BrowserSync](https://www.browsersync.io), [Stylus](http://stylus-lang.com), [Pug](http://jade-lang.com), [CSS-Nano](http://cssnano.co), [Autoprefixer](https://github.com/postcss/autoprefixer), [Coffeescript](http://coffeescript.org/) and [Uglify](https://github.com/mishoo/UglifyJS) to speed up your workflow and get things done.

### Basic Usage
Installation is simple. Either clone or download to the directory you want to place your site. Rename the folder to the name of your project.

You will have these files:
```
Majesti
  |  gulpfile.js
  |  README.md
  |  /static
  |  /templates
```

1. If you do not have Node.js installed yet, install it from [here](https://nodejs.org/en).

2. Install Gulp globally by opening Terminal or [git bash](https://git-scm.com/downloads) and typing ``npm install --global gulp-cli``. This will allow you to use Gulp to setup and maintain your project as well as any future projects. You only have to run this once following your Node.js installation.  
**Note:** Git for Windows comes packaged with the git bash shell for working on a Windows machine.

3. While still inside your project directory, type ``npm install`` to install the necessary node modules.

4. When all of the node modules are finished installing, you can start the proxy server and file watcher by typing "``gulp``" and hitting Enter.

Allow the gulp command to keep running while you develop your site.  
Anytime you wish to restart development, use Terminal or git bash to change to your project directory and type ``gulp`` and hit Enter.

**Majesti** will do all of the preprocessing and compression for you. Allowing you to focus on the important stuff.  

___

#### Features
- Majesti will convert your stylus files to css and add the browser prefixes where necessary.
- Converts all template pug files to html files and places them in the root directory.
- Optimizes all svg files placed or saved in the static/svg folder.
- Converts each svg file placed or saved in the static/svg folder to a png file and places it in the static/img folder.
- Converts each coffee file placed or saved in the static/coffee folder to a js file and places it in the static/js folder.
- Optimizes all js files placed or saved in the static/js folder.  

--- 

### How Majesti works
- Scanning
  - Majesti will watch all pug files for changes and convert them into html pages, placing them inside the root directories' pages folder
  - All styl files inside the static directory will be watched for changes and converted to css inside the static/css directory.
- Index page (Home page)
  - Majesti scans the templates/pages directory for either a home or index file/folder. This file is used to display the index or 'home page'.
  - The home/index page's index file is automatically copied to the root directory as 'index.html'.
  - It's strongly advised to use one or the other in your pages 'index' or 'home'.  
    **Note:** If 'home' is used, the link to your home page will be something like 'domain.com/pages/home' rather than 'domain.com/pages/index'.
    
___

### Coming Soon
- Category pages