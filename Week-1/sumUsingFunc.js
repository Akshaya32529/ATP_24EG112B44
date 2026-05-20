//6(sum of array elements using function)

let a=function(array){
    let sum=0;
    for(let b=0;b<array.length;b++){
        sum=sum+array[b];
    }
    return sum;
}
console.log(a([1,2,3,4,5]))
