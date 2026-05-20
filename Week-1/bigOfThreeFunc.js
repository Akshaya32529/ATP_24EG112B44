//5(biggest number among 3 numbers using function)

let big=function (a,b,c)
{
    let bigNo;
    if(a>b&&a>c)
        bigNo=a;
    else if(b>a&&b>c)
        bigNo=b;
    else
        bigNo=c;
    return bigNo;
}

console.log(big(10,20,30))