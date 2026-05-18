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
// 1. Filter temperatures greater than 35°C
let hotTemps=temperatures.filter(temperatures=>temperatures>35)
console.log('Temperatures above 35°C:', hotTemps);


// 2. Convert all Celsius temperatures to Fahrenheit
let fahrenheitTemps = temperatures.map(temp => (temp * (9/5)) + 32);
console.log('Temperatures in Fahrenheit:', fahrenheitTemps);


// 3. Calculate the average temperature in Celsius
const averageTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average Temperature (°C):", averageTemp);

// 4. Find the first temperature above 40°C
const firstHotTemp = temperatures.find(temp => temp > 40);
console.log('First temperature above 40°C:', firstHotTemp);

// 5. Find the index of temperature 28°C
const index = temperatures.findIndex(temp => temp === 28);
console.log('Index of temperature 28°C:', index);