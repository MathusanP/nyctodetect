<div align='center'>
	<a href='https://www.npmjs.com/package/nyctodetect'><img src='https://img.shields.io/npm/v/nyctodetect.svg?maxAge=3600' alt='Verison' ></a>
	<a href='https://www.npmjs.com/package/nyctodetect'><img src='https://img.shields.io/npm/dt/nyctodetect.svg?maxAge=3600' alt='Downloads' ></a>
  <a href='https://www.npmjs.com/package/nyctodetect'><img src='https://img.shields.io/github/actions/workflow/status/axios/axios/ci.yml?branch=v1.x&label=CI&logo=github&style=flat-square' alt='Build Version'></a>
</div>


# Introducing NyctoDetect: Image brightness Detection Software

NyctodetectDetect is an innovative software solution designed to accurately assess the brightness level of images based on a given URL. 
With advanced algorithms and machine learning capabilities, it provides reliable and precise measurements of the brightness or darkness of an image, allowing users to gain valuable insights and enhance their
image processing workflows.


Note: <br>
Machine learning and AI provided by [Teachable Machine](https://teachablemachine.withgoogle.com) <br>
Dataset gathering project: [Nyctodetect Project](https://github.com/bagelwastaken/nyctodetect-website)

## Installation
Install with [npm](https://www.npmjs.com/):
``` npm
npm install nyctodetect
```
## Working Example
``` js
const nyctodetect = require('nyctodetect')

const imageUrl = 'https://www.ledr.com/colours/white.jp';
nyctodetect(imageUrl);
```
Be sure to replace the variable `imageUrl` with the image url you would like to use.
