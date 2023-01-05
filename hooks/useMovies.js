import { QueryClient, useInfiniteQuery, useQuery } from "react-query";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "0ed1a1ec26d080c9365057c50145a153";

const getNowPlayings = async () =>
  await fetch(
    `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());

const getTopRatedMovies = ({ pageParam = 1 }) =>
  fetch(
    `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=${pageParam}`
  ).then((res) => res.json());

const getUpcomingMovies = ({ pageParam = 1 }) =>
  fetch(
    `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=${pageParam}`
  ).then((res) => res.json());

const useMovies = () => {
  const { isLoading: isNowPlayingsLoading, data: nowPlayings } = useQuery(
    ["movies", "nowPlayings"],
    getNowPlayings
  );

  const {
    isLoading: isTopRatedMoviesLoading,
    data: topRatedMovies,
    fetchNextPage: topRatedFetchNextPage,
    hasNextPage: topRatedHasNextPage,
  } = useInfiniteQuery(["movies", "topRatedMovies"], getTopRatedMovies, {
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
    },
  });

  const {
    isLoading: isUpcomingMoviesLoading,
    data: upcomingMovies,
    fetchNextPage: upcomingFetchNextPage,
    hasNextPage: upcomingHasNextPage,
  } = useInfiniteQuery(["movies", "upcomingMovies"], getUpcomingMovies, {
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
    },
  });

  const refetchMovies = async () => {
    await QueryClient.refetchQueries(["movies"]);
  };

  const fetchNextUpcomingMovies = async () => {
    if (upcomingHasNextPage) {
      await upcomingFetchNextPage();
    }
  };

  const fetchNextTopRatedMovies = async () => {
    if (topRatedHasNextPage) {
      await topRatedFetchNextPage();
    }
  };

  return {
    isNowPlayingsLoading,
    isTopRatedMoviesLoading,
    isUpcomingMoviesLoading,
    nowPlayings,
    topRatedMovies,
    upcomingMovies,
    refetchMovies,
    fetchNextUpcomingMovies,
    fetchNextTopRatedMovies,
  };
};

export default useMovies;
