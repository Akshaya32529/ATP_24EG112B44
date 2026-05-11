//7(searching element in array using function)
function searchFromArray(array,s){
    for(let b=0;b<array.length;b++){
        if(s===array[b]){
        return b;
    }}
     return "not found"

}
console.log(searchFromArray([1,2,3,4,5],5))
