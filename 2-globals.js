//globals - no windows

// console.log(__dirname);
console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

let id=setInterval(()=>{
    console.log("mahidra");
},1000);
console.log(id);
setTimeout(()=>{
    console.log("rahul");
},2400);
setTimeout(()=>{
    clearInterval(id);
    console.log("timer is stoped");
},5000);
