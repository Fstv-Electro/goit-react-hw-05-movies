import { useState, useEffect } from "react";
import { MoviesList } from "components/MovieList/MovieList";
import { fetchTrending } from "API";
import { Loader } from "components/Loader";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchMovies() {
            try {
                setIsLoading(true);
                const data = await fetchTrending();
                setMovies(data);
            } catch {
                console.log(Error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMovies();
    }, []);

    return (
        <main>
            <h1>Trending</h1>
            {isLoading ? <Loader /> : <MoviesList movies={movies} />}
        </main>
    );
};

export default Home;