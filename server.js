// server.js

const {VertexAI} = require('@google-cloud/vertexai');
const readline = require('readline');

const textsi_1 = "You can only answer with I can and I can not";

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({project: 'tensile-rite-422817-g5', location: 'us-central1'});
const model = 'gemini-1.0-pro-002';

// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    'maxOutputTokens': 2048,
    'temperature': 1,
    'topP': 1,
  },
  safetySettings: [
    {
        'category': 'HARM_CATEGORY_HATE_SPEECH',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_DANGEROUS_CONTENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_HARASSMENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    }
  ],
});

const chat = generativeModel.startChat({});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function sendMessage(message) {
  const streamResult = await chat.sendMessageStream(message);
  return (await streamResult.response).candidates[0].content;
}

async function generateContent(userInput) {
  const systinstr = "Respond to the prompt like you are a mental health assistance bot.Try to answer in about 50 words and only answer in more if the prompt(text that comes next) asks you to."
  const response = await sendMessage([{ text: systinstr+userInput }]);
  return response;
}



const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());


app.use(cors({
origin: ['http://192.168.1.36:3000/', 
    'http://192.168.1.36:3000/data']
}));

app.get('/data', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://192.168.1.36:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  console.log("Hellp");
  res.json({ message: 'Hello from the server!' });
});

app.post('/message', async (req, res) => {
  console.log("Hello");
  const userInput = req.body.message;

  // Handle the user input and generate a response
  const botResponse = await generateContent(userInput);
  console.log(botResponse);
  // Send the bot's response back to the frontend
  res.json(botResponse);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
