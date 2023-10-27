const { readFile,writeFile, read } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async()=>{
    try{
        const first = await readFile('../content/first.txt','utf-8');
        const second = await readFile('../content/subdir/second.txt','utf-8');
        await writeFile('../content/result',`this is result ${first} ${second}`,{flag:'w'});
        console.log(first,second);
    }catch(err){
        console.log(err);
    }
}
start();