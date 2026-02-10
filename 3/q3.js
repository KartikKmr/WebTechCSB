//avg marks to compute average marks and retun "pass"if average>=40% else "fail"
const averageMarks=(a,b,c,d,e)=>{
    let avg=(a+b+c+d+e)/5;
    if(avg>=40){
        return "Pass";
    }else{
        return"Fail";
    }
}
console.log(averageMarks(39,40,40,40,40));