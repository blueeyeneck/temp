//globals - no windows

// console.log(__dirname);
console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

a=1;
let id=setInterval(()=>{
    console.log(a+" mahidra");
    a=a+1;
},1000);
console.log(id);
setTimeout(()=>{
    console.log("rahul");
},2300);
setTimeout(()=>{
    clearInterval(id);
    console.log("timer is stoped");
},5000);
