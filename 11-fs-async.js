// const {readFileSync}=require('fs');
// const fs=require('fs')

const { readFile,writeFile }=require('fs');
console.log('start');

readFile('./content/subdir/text.txt','utf8',(err,res)=>{
    if(err){
        console.log(err)
        return;
    }
    const first=res;
    console.log(res);
    readFile('./content/subdir/second.txt','utf8',(err,res)=>{
        if(err){
            console.log(err)
            return;
        }
        const second=res;
        console.log(res);
        writeFile('./content/subdir/result-asyn.txt',`here is the result: ${first},${second}`,{flag:'a'},(err,res)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    });
});
console.log('starting next line');


