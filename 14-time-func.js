console.log('hello world');
console.time();
for(let i=0;i<1000;++i){
    const h3=document.querySelector('h3');
    h3.textContent=`hey, now the time is ${i}`
}
let h1=document.createElement('h1');
t=console.timeEnd();
h1.innerText=`time end:-${t}`;
document.querySelector('h3').append(h1);
console.log('bye world');