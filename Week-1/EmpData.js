const employess=[
    {
        eno:101,
        name:"Ravi",
        marks:[78,82,91],
    },
    {
        eno:102,
        name:"bhanu",
        marks:[65,70,68],
    },
    {
        eno:103,
        name:"sneha",
        marks:[88,92,95],
    },
    {
        eno:104,
        name:"kiran",
        marks:[55,60,58],

    },
    {
        eno:105,
        name:"anitha",
        marks:[90,85,87],
    },
];

//1 insert new employee at 2nd position
employess.splice(2,0,{
    eno:105,
    name:"akshaya",
    marks:[30,40,60,90],
},)
console.log(employess)



//2 remove an employee with name kiran
let i;
for(let emp in employess){
    if(employess[emp].name=="kiran")
        i=emp;
}
employess.splice(i,1)
console.log(employess)







//3  change the last mark 95 to 75 of emp "sneha"
for(let v of employess){
    if(v.name==="sneha"){
        for(let k in v.marks){
            if(v.marks[k]===95){
                v.marks[k]=75;
            }
        }
    }
}
console.log(employess)
