let fs = require('fs');
let path = require('path');

if(!fs.existsSync('newFolder')){
    fs.mkdirSync("newFolder");
}
    
let filepath= path.join(__dirname,'newFolder','newFile.txt')

console.log(filepath);

fs.writeFileSync(filepath,"file has created");


