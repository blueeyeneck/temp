//local
c="rahul"
//global
const a="peter";
const b="john";
const sayhello=(name)=>{
    console.log(`hii there ${name}`);
};
module.exports={a,b,sayhello};
// console.log(module);
// console.log("mahindra");''

function mahi(){
    console.log('mahindra');
    console.log(__filename);
}

mahi()
console.log('in 4-names.js file')

