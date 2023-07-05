const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require('path');

const modelURL = 'https://storage.googleapis.com/tm-model/n9sgdpBR5/model.json'; // Replace with the actual URL of the model JSON
const saveDirectory = 'C:/Mathusan/code/Nyctodetect/models';


async function loadModel() {
  const model = await tf.loadLayersModel(modelURL);

  // Save the model to the specified directory
  await model.save(`file://${saveDirectory}`);

  console.log('Model saved successfully!');
}

loadModel();
