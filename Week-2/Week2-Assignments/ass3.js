/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/


    const marks = [78, 92, 35, 88, 40, 67];
    //1
    const a=marks.filter(s=>s>=40)
    console.log(a);

    //2
    const b=marks.map(s=>s+5);
    console.log(b);

    //3
    const c=marks.reduce((acc,high)=>{
        if(acc>high)
            return acc;
        else 
            return high;
    },0)
    console.log(c)


    //4
    const d=marks.find(s=>s<40)
    console.log(d)


    //5
    const e=marks.findIndex(s=>s===92)
    console.log(e)