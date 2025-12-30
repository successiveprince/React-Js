import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movie, setMovies] = useState<any>();
  const [searchTerm, setSearchTerm] = useState<string>("Inception");
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = () => {
    if (inputValue.trim() === "") return;
    setSearchTerm(inputValue);
  };

  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=bc16527d&t=" + searchTerm)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex gap-3">
          <div className="relative flex-1"> 
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search for movies..."
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button
            onClick={handleSearch}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/50"
          >
            Search
          </button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        {movie ? (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            <div className="md:flex">
              {/* Poster Section */}
              <div className="md:flex-shrink-0 md:w-80 bg-black/30">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-4">
                  <h1 className="text-4xl font-bold text-white leading-tight">
                    {movie.Title}
                  </h1>
                  <div className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {movie.imdbRating}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm font-medium border border-purple-400/30">
                    {movie.Year}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm font-medium border border-blue-400/30">
                    {movie.Rated}
                  </span>
                  <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm font-medium border border-green-400/30">
                    {movie.Runtime}
                  </span>
                </div>

                <div className="space-y-4 text-gray-200">
                  <div>
                    <span className="text-gray-400 font-semibold">Genre:</span>
                    <p className="text-white mt-1">{movie.Genre}</p>
                  </div>

                  <div>
                    <span className="text-gray-400 font-semibold">
                      Director:
                    </span>
                    <p className="text-white mt-1">{movie.Director}</p>
                  </div>

                  <div>
                    <span className="text-gray-400 font-semibold">Actors:</span>
                    <p className="text-white mt-1">{movie.Actors}</p>
                  </div>

                  <div>
                    <span className="text-gray-400 font-semibold">Plot:</span>
                    <p className="text-white mt-2 leading-relaxed">
                      {movie.Plot}
                    </p>
                  </div>

                  {movie.Awards && movie.Awards !== "N/A" && (
                    <div className="mt-6 p-4 bg-amber-500/20 border border-amber-500/30 rounded-lg">
                      <span className="text-amber-300 font-semibold">
                        🏆 Awards:
                      </span>
                      <p className="text-amber-100 mt-1">{movie.Awards}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mb-4"></div>
              <h2 className="text-2xl text-white font-semibold">Loading...</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
