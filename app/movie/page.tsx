async function getMovies() {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTkwMjllOTE4M2M0YjMwMGUxMDFhZDdmY2E0NjE3OCIsIm5iZiI6MTczODAzNTc3My4zNCwic3ViIjoiNjc5ODUyM2Q3MDJmNDkyZjQ3OGY2YmRmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.WwcDFoA0xnDmj8IXCwIL_pietzONqFubhREgGeyNppg'
        }
    };
    const result = await fetch(url, options)
        .then(res => res.json())
        .catch(err => {
            console.error(err);
            return null;
        });

    return result?.results || [];
}

export default async function Page() {
    const movies = await getMovies();
    console.log(movies);
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-700 py-8">
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center text-white mb-12">Trending Movies</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {movies.map((movie: any) => (
                        <div 
                            key={movie.id} 
                            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img 
                                src={`${imageBaseUrl}${movie.poster_path}`} 
                                alt={movie.title} 
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-3 text-gray-800">{movie.title}</h2>
                                <p className="text-gray-600 line-clamp-3">{movie.overview}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}