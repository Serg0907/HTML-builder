const path = require('path');
const text = path.join(__dirname, 'text.txt');
const fs = require('fs');
const stream = fs.createReadStream(text, 'utf-8');
stream.on('data', chunk => console.log(chunk));

