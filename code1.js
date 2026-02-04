const aa=()=>{return{user:"name"}};
console.log(aa());

const bb=()=>[1,2,3,4,5,6];
console.log(bb());

const user={
    name:"KK",age: 19,
    welcome:function(){
      console.log("hello ${this.name}") ;
      console.log(this);  
    }
};
const f=user.welcome();
  //console.log(f)
user.name="kartik";
user.welcome();