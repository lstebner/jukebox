# Jukebox

This is a "jukebox", or "audio player", which is used on my website to showcase the beats I create. Theoretically, it can play any playlist though.

## Components

- Jukebox
  - Header
  - PlaylistPills
  - BeatsList
  - NowPlayingFooter

## setup

1. clone this repo
2. `npm install`
3. `npm run start:dev`

## test

- `npm test`

## file structure

There is a bit of a mess here still, but I will clean it up once every thing works. This is a port of the code used at [lstebner.com/lukebox](http://lstebner.com/lukebox), re-written as JSX components with tests. It's also now powered by webpack, instead of CodeKit. 

- jukebox/
  - This is the main source folder. It contains .jsx files for each component and .less files to go with each of those components. 
  - `jukebox.jsx` is the main component with the alongside .less file being the container styles. 
  - `jukebox-components.jsx` this is a single include, which includes all the other Components used in jukebox.
  - `data.js` this is the main data file for my jukebox. it doesn't have to be for yours, but you could replace the data if cloning this repo to create your own playlist. I'll write more about this in the [data](/#data) section. This is basically just rendered JSON representing a name and location for every song to load in the jukebox.
- spec/
  - tests! run these tests with `npm test`
  - the files in here are named the same as the files under `jukebox/` and should test all those things. every one should feel free to add more tests.
- entry.js
  - the main entry point for the app. this includes `jukebox/jukebox`
- webpack.config.js
  - the webpack config


## data (data.js)

_coming soon..._
