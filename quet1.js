//calculator 

const add=(a1,a2)=>a1+a2;
const sub=(a1,a2)=>a1-a2;
const multiply=(a1,a2)=>a1*a2;
const division=(a1,a2)=>(a2==0 ? "error":a1/a2);

console.log(add(11,5));
console.log(sub(11,5));
console.log(multiply(11,5));
console.log(division(11,5));