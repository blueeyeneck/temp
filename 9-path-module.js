const os=require("os");
const path=require("path");
const fs=require("fs");
const http=require("http");
// console.log(os);
// console.log(path);
// console.log(fs);
// console.log(http);

console.log(path.sep);
// console.log(path);
// console.log(path.join);
const filePath=path.join("/content","subdir","text.txt");
console.log(filePath);
// console.log(path.sep);
// console.log(path);

const base=path.basename(filePath);
console.log(base);

const absolute=path.resolve(__dirname,'content','subdir','text.txt');
console.log(absolute);
console.log(path.resolve(__dirname));

const ab=path.resolve(__dirname,'content','subdir','second.txt');
console.log(ab)
console.log(path.resolve(__dirname));
