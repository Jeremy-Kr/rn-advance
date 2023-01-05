import styled from "@emotion/native";
import { useState } from "react";
import { RefreshControl } from "react-native";
import Landing from "../components/movies/Landing";
import TopRated from "../components/movies/TopRated";
import UpcomingMovies from "../components/movies/UpcomingMovies";
import useMovies from "../hooks/useMovies";

const Movies = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { refetchMovies } = useMovies();

  const handleOnRefresh = async () => {
    setIsRefreshing(true);
    refetchMovies();
    setIsRefreshing(false);
  };
  return (
    <MoviesContainer
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={() => {
            handleOnRefresh();
          }}
        />
      }
    >
      <Landing />
      <TopRated />
      <UpcomingMovies />
    </MoviesContainer>
  );
};

const MoviesContainer = styled.ScrollView``;

export default Movies;
