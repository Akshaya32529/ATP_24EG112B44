//2(biggest of three numbers)
let a=10;
let b=20;
let c=30;
if(a>b && a>c){
    console.log("a is big")
}else if(b>a && b>c){
    console.log("b is big")
}else{
    console.log("c is big")
}



//another way(using ternary operator)
let d = 10;
let e = 25;
let f = 15;

let biggest = (d > e) 
                ? (d > f ? d : f) 
                : (e > f ? e : f);

console.log("Biggest number is:", biggest);