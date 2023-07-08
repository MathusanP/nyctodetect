const tf = require('@tensorflow/tfjs-node');
const { createCanvas, loadImage } = require('canvas');
const sharp = require('sharp');
const axios = require('axios');
const path = require('path');

const modelPath = path.resolve(__dirname, 'models', 'model.json');

async function processImageFromURL(imageUrl) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = response.data;
    const image = await sharp(imageBuffer)
      .resize(224, 224)
      .toBuffer();

    // Rest of the image processing logic...

    return image;
  } catch (error) {
    console.error('Error processing image:', error);
    return null;
  }
}

async function loadModel(modelPath) {
  try {
    const model = await tf.loadLayersModel(`file://${modelPath}`);
    return model;
  } catch (error) {
    console.error('Error loading model:', error);
    return null;
  }
}

async function run(imageUrl) {
  try {
    // Load the model
    const model = await loadModel(modelPath);

    if (!model) {
      console.error('Model could not be loaded.');
      return;
    }

    // Process the image from the URL
    const processedImageBuffer = await processImageFromURL(imageUrl);

    if (!processedImageBuffer) {
      console.error('Image could not be processed.');
      return;
    }

    // Convert processed image buffer to tensor
    const processedImageTensor = tf.node.decodeImage(processedImageBuffer);

    // Reshape the tensor to match the expected input shape of the model
    const reshapedImageTensor = processedImageTensor.expandDims(0);

    // Perform predictions
    const predictions = await model.predict(reshapedImageTensor);

    // Get the percentage values
    const predictionData = predictions.arraySync()[0];
    const [class1Percentage, class2Percentage] = predictionData;

    const dark = Number((class1Percentage * 100).toPrecision(3));
    const light = Number((class2Percentage * 100).toPrecision(3));

    console.log(`Your image contains ${dark}% dark content and ${light}% light content.`);

    // Cleanup
    tf.dispose([model, processedImageTensor, reshapedImageTensor]);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function nyctodetect(imageUrl) {
  run(imageUrl);
}

module.exports = nyctodetect;
