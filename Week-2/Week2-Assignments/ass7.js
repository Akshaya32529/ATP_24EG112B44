/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//1
const a=movies.filter(a=>a.genre==="Sci-Fi")
console.log(a)


//2
const a1=movies.map(s=>`${s.title} (${s.rating})`);
console.log(a1)


//3
const avg=movies.reduce((sum,a)=>sum+a.rating,0)/movies.length;
console.log(avg)

//4
const a2=movies.find(s=>s.title==="Joker")
console.log(a2)


//5
const a3=movies.findIndex(s=>s.title==="Avengers")
console.log(a3)