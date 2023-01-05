import { QueryClient, useQuery } from "react-query";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "0ed1a1ec26d080c9365057c50145a153";

const getNowPlayings = async () =>
  await fetch(
    `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());

const getTopRatedMovies = async () =>
  await fetch(
    `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());

const getUpcomingMovies = async () =>
  await fetch(
    `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());

const useMovies = () => {
  const { isLoading: isNowPlayingsLoading, data: nowPlayings } = useQuery(
    ["movies", "nowPlayings"],
    getNowPlayings
  );
  const { isLoading: isTopRatedMoviesLoading, data: topRatedMovies } = useQuery(
    ["movies", "topRatedMovies"],
    getTopRatedMovies
  );
  const { isLoading: isUpcomingMoviesLoading, data: upcomingMovies } = useQuery(
    ["movies", "upcomingMovies"],
    getUpcomingMovies
  );

  const refetchMovies = async () => {
    await QueryClient.refetchQueries(["movies"]);
  };

  return {
    isNowPlayingsLoading,
    isTopRatedMoviesLoading,
    isUpcomingMoviesLoading,
    nowPlayings,
    topRatedMovies,
    upcomingMovies,
    refetchMovies,
  };
};

export default useMovies;
