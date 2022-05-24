
const fs = require('fs');
var path = require('path');  

fs.readdir(path.join(__dirname, 'secret-folder'), 
  { withFileTypes: false },
  (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
       fs.stat(path.join(__dirname, 'secret-folder', file), (error, stats) => {
        if (!stats.isDirectory()) {
            console.log(path.basename(file, path.extname(file)) + ' - ' + path.extname(file).slice(1) + ' - ' + stats["size"] + 'kb');
        }
      });
    })
  }  
})

