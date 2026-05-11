/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/
const temperatures=[32,35,28,40,38,30,42];
let x=temperatures.filter(temperatures=>temperatures>35)
console.log(x)
let x1=temperatures.map(temperatures=>(temperatures*(9/5))+32)
console.log(x1)

const averageTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average Temperature (°C):", averageTemp);

const first=temperatures.find(s=>s>40)
console.log(first)
const ind=temperatures.findIndex(s=>s===28)
console.log(ind)