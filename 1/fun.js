/*(function show(){
    console.log("Welcome to csb");
})();//iife :- immediately invoke funtion  

()=>{//arrow funtion
    console.log("Welcome to csb");//without name funtion annonmous fuct
}//can use iife
*/
function person() {
    this.age = 26;
    setTimeout(() => {
        console.log(this.age);
    }, 1000);
}

new person();
