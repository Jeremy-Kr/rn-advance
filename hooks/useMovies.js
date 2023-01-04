import { useEffect, useState } from "react";

const useMovies = () => {
  const [nowPlayings, setNowPlayings] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY = "0ed1a1ec26d080c9365057c50145a153";
  const getNowPlayings = async () => {
    const { results } = await fetch(
      `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));

    setNowPlayings(results);
  };

  const getTopRatedMovies = async () => {
    const { results } = await fetch(
      `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));

    setTopRatedMovies(results);
  };

  const getUpcomingMovies = async () => {
    const { results } = await fetch(
      `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));

    setUpcomingMovies(results);
  };

  const getAllMoviesData = async () => {
    setIsLoading(true);

    await getNowPlayings();
    await getTopRatedMovies();
    await getUpcomingMovies();

    setIsLoading(false);
  };

  useEffect(() => {
    getAllMoviesData();
  }, []);

  return {
    isLoading,
    nowPlayings,
    topRatedMovies,
    upcomingMovies,
    getAllMoviesData,
  };
};

export default useMovies;
