const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');
const readline = require('readline');
let writeableStream = fs.createWriteStream(path.join(__dirname, 'info.txt'));
let rl = readline.createInterface({
  input: process.stdin
});

stdout.write('Приветствую. Напиши что-нибудь\n');
stdin.on('data', data => {
  var name = data.toString();  
  stdout.write('Вы ввели ');
  stdout.write(name);
  writeableStream.write(name);
});

rl.on('line', (line) => {
  if (line === 'exit') {
    rl.close();
    process.exit();
  }
});

process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));


