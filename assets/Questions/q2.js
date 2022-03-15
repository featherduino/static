//given an array = [ audio,video,image,software]
// make folder for each ellement in the given array 
// and inside each folder create relevant files

let fs = require('fs');
let path = require('path');

let arr = ['Audio','Video','Software','Doc','Apps','Other'];
let namearr = ['abc','efg','xyz','def'];
let extArr = ['.mp3','.mp4','.exe','.pdf','.apk','.rar']
let organisepath = path.join(__dirname,"Organise");

console.log(organisepath);


if(!fs.existsSync(organisepath)){
    fs.mkdirSync(organisepath);
}


for(let i = 0; i<arr.length; i++){

    let folderkapath = path.join(organisepath,arr[i]);

    if(!fs.existsSync(folderkapath)){

        fs.mkdirSync(folderkapath)
    }

    for(let j = 0;j<namearr.length;j++){

        let filename = namearr[j] + extArr[i];

        let filepath = path.join(folderkapath,filename);

        fs.writeFileSync(filepath,"");

    }
}