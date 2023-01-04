import styled from "@emotion/native";
import { FlatList, RefreshControl, View } from "react-native";
import Landing from "../components/movies/Landing";
import TopRated from "../components/movies/TopRated";
import UpcomingMovies from "../components/movies/UpcomingMovies";
import useMovies from "../hooks/useMovies";

const Movies = () => {
  const { isLoading, getAllMoviesData } = useMovies();
  const handleOnRefresh = () => {
    getAllMoviesData();
  };
  return (
    <MoviesContainer>
      <Landing />
      <TopRated />
      <UpcomingMovies />
    </MoviesContainer>
  );
};

const MoviesContainer = styled.ScrollView``;

export default Movies;
