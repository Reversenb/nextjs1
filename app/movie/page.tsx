"use client";
import React, { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTkwMjllOTE4M2M0YjMwMGUxMDFhZDdmY2E0NjE3OCIsIm5iZiI6MTczODAzNTc3My4zNCwic3ViIjoiNjc5ODUyM2Q3MDJmNDkyZjQ3OGY2YmRmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.WwcDFoA0xnDmj8IXCwIL_pietzONqFubhREgGeyNppg",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch((error) => console.error(error));
  }, []);

  const openPopup = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const closePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="bg-purple-800 min-h-screen text-white">
      <h1 className="text-center text-4xl font-bold py-8">Trending Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-200"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg">{movie.title}</h3>
              <button
                onClick={() => openPopup(movie)}
                className="mt-2 px-4 py-2 bg-purple-700 text-white rounded-lg"
              >
                More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
            >
              ✕
            </button>
            <img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-2xl font-bold mt-4">{selectedMovie.title}</h2>
            <p className="text-sm text-gray-700 mt-2">
              Release Date: {selectedMovie.release_date}
            </p>
            <p className="mt-4">{selectedMovie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;