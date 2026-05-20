/* Assignment 4: Movie Recommendation System
------------------------------------------
Scenario: Build a movie recommendation system for a streaming platform.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
  1. filter() only "Sci-Fi" movies
  2. map() to return strings like "Inception (8.8)"
  3. reduce() to calculate the average movie rating
  4. find() the movie "Joker"
  5. findIndex() of "Avengers"
*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. Filter only the Sci-Fi movies from the list
const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log('Sci-Fi movies:', sciFiMovies);

// 2. Create display strings for each movie: "Title (rating)"
const movieDisplayStrings = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log('Movie display strings:', movieDisplayStrings);

// 3. Calculate the average rating of all movies
const averageRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log('Average movie rating:', averageRating);

// 4. Find the movie object for "Joker"
const Movie = movies.find(movie => movie.title === "Joker");
console.log('Found movie Joker:', Movie);

// 5. Find the index of the movie titled "Avengers"
const Index = movies.findIndex(movie => movie.title === "Avengers");
console.log('Index of Avengers:', Index);