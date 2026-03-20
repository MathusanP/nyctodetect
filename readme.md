# nyctodetect

A Node.js package that detects the brightness level of an image from a URL, built using a [Teachable Machine](https://teachablemachine.withgoogle.com) model trained on dark and light images. Then provides a confidence score on how likely it is to trigger a pattern commonly known to be associated with [Nyctophobia](https://en.wikipedia.org/wiki/Fear_of_the_dark)

Originally created as part of a Google employer engagement programme in sixth form, as a cross-disciplinary project linking psychology (nyctophobia — fear of the dark) with machine learning.

## Installation
```bash
npm install nyctodetect
```

## Usage
```js
const nyctodetect = require('nyctodetect')

const imageUrl = 'https://www.example.com/image.jpg';
nyctodetect(imageUrl);
```

## How it works

Passes an image URL through a TensorFlow.js model trained via Google's Teachable Machine to classify the image as bright or dark.

## Notes

- Model and weights were trained using [Google Teachable Machine](https://teachablemachine.withgoogle.com)

## Status

This package is no longer actively maintained and will be deprecated soon.
