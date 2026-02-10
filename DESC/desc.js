const student={
   name:"Abhishek",
    age:33,
    address:{
        city:"Ghaziabad",
        state:"UP"
        
    }
}
//const { name: stuname ="amit",age,address:{city}}=student;
//console.log(stuname,age,city);

function dispalystu({name,age}){
    console.log(`My name is ${name} and age is ${age}`);
}
dispalystu(student);