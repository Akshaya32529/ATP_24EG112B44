//4(smallest element in array)
let marks=[90,78,65,98]
let small=marks[0];
for(let a=0;a<marks.length;a++){
    if(small>marks[a]){
        small=marks[a]
    }
}
console.log(small)