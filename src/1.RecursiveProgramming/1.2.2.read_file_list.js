const testFolder = '/';

function getFileList(dir, filelist) {
  const fs = require('fs');
  const path = require('path');
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  
  files.forEach((file) => {
    const filepath = path.join(dir, file);

    try {
      fs.accessSync(filepath, fs.constants.R_OK);

      if (fs.lstatSync(filepath).isDirectory()) {
        getFileList(filepath, filelist);
      } else {
        filelist.push(filepath);
      }
    } catch(e) {
      console.log(`${file} is not readable.`);
    }
  })
  return filelist;
}

console.log('----', getFileList(testFolder));