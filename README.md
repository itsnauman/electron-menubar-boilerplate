# Electron Menubar Boilerplate 🎉 🚀

Babel + Electron + Menubar + React + Browserify + SASS. Based on [menubar](https://github.com/maxogden/menubar) and [jolteon](https://github.com/vulpino/jolteon) 😀

## Features

- One command app builds
- Live reloading
- App Linting

## How to get started

```
npm install -g gulp-cli electron-prebuilt
git clone --depth=1 --branch=master https://github.com/itsnauman/electron-menubar-boilerplate.git electron-menubar
cd electron-menubar
rm -rf .git
npm install
gulp serve
```

### If you're on windows...

`gulp package-osx` will fail because symlinks. Sorry. Blame gulp-atom-electron.

## Directory Structure

- Your client HTML lives in app/.
- Your client javascript lives in app/js/.
- Your client SCSS lives in app/scss.
- Your react components live in app/js/components/.
- Your electron server code lives in src/.
- Everything is programmed using Javascript, the new, cool kind (ES2015).

### Building

- Build the client and server bundles: `gulp build`
- Watch app/ and src/ for changes and update build/ automagically: `gulp watch`
- Lint everything (We use StandardJS, but you can modify the .eslintrc): `gulp lint`
- Open up the app: `gulp serve`. This will also live reload everything, so don't worry about that.
- Package the app for release: `gulp package`.
