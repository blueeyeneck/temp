console.log('hello world');
console.time();
for(let i=0;i<10000000;++i){
    const h3=document.querySelector('h3');
    h3.textContent=`hey, now the time is ${i}`
}
console.timeEnd();
console.log('bye world');