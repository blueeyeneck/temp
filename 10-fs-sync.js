// const {readFileSync}=require('fs');
// const fs=require('fs')

const { readFileSync,writeFileSync }=require('fs');

console.log('start');
const first=readFileSync('./content/subdir/text.txt','utf8');
const second=readFileSync('./content/subdir/second.txt','utf8');


console.log(first);
console.log(second);

// writeFileSync('./content/third.txt',`hter is the result: ${first} and ${second}`);   // creating a new file use fs module

writeFileSync('./content/third.txt',`hter is the result: ${first} and ${second} third`,{flag:'w'});   // appending a the existing file by flag object

console.log("done");
console.log('starting next line');

const third=readFileSync('./content/third.txt','utf8');
console.log(third);