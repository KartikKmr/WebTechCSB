function add(...number){//resh operator
    let total = 0;
    //for(let i=0;i<number.length;i++){
    //for(let i in number){//2nd type of for loop
    for(let i of nummer){ //3rd type "of "used for values 
        total=total+number[i];
    }
    return total 
}
console.log(add(12,11,10,5));
//returning 0 becuz= total ki vulue kabhi pass hi nhi hui jh 
//soln:1.take it as array 
//soln2:using resh operator(i.e ...) app multiple value le sakte h and rest oprator use array bana leta h khud se 
