import styled from "@emotion/native";
import Swiper from "react-native-swiper";
import Landing from "../components/movies/Landing";
import TopRated from "../components/movies/TopRated";
import UpcomingMovies from "../components/movies/UpcomingMovies";

const Movies = () => {
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
