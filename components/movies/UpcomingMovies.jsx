import styled from "@emotion/native";
import { ActivityIndicator } from "react-native-paper";
import useMovies from "../../hooks/useMovies";
import { SCREEN_HEIGHT } from "../../utils/utils";
import UpcomingSection from "./UpcomingSection";

const UpcomingMovies = () => {
  const { isUpcomingMoviesLoading, upcomingMovies } = useMovies();

  if (isUpcomingMoviesLoading) {
    return (
      <ActivityIndicatorContainer>
        <ActivityIndicator />
      </ActivityIndicatorContainer>
    );
  }

  return (
    <>
      <UpcomingMoviesMainTitle>Upcoming Movies</UpcomingMoviesMainTitle>
      {upcomingMovies.results.map((item) => (
        <UpcomingSection item={item} key={item.id} />
      ))}
    </>
  );
};

const ActivityIndicatorContainer = styled.View`
  flex: ${1 / 3};
  height: ${SCREEN_HEIGHT / 3 + "px"};
  justify-content: center;
  align-items: center;
`;

const UpcomingMoviesMainTitle = styled.Text`
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  font-size: 20px;
  margin: 10px 10px 0 10px;
`;

export default UpcomingMovies;
