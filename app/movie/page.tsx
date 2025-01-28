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
        <div>
            {movies.map((movie: any) => (
                <div key={movie.id}>
                    <h1>{movie.title}</h1>
                    <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.overview}</p>
                </div>
            ))}
        </div>
    );
}