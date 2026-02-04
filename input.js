const r1=require("readline").createInterface({//readline is module
    input:process.stdin,//input from keyboard
    output:process.stdout,
});

r1.question("enter a something: ",//query and arrow funtion is call backing 
    (answer)=>{//its called asyncronus funtion ghar pe padhna h its related to the 
        console.log("you entered: ",answer);
        r1.close();
    });
