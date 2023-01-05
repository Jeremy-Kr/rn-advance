import styled from "@emotion/native";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import useMovies from "../../hooks/useMovies";
import { SCREEN_HEIGHT } from "../../utils/utils";
import TopRatedCard from "./TopRatedCard";

const TopRated = () => {
  const { isTopRatedMoviesLoading, topRatedMovies } = useMovies();

  if (isTopRatedMoviesLoading) {
    return (
      <ActivityIndicatorContainer>
        <ActivityIndicator />
      </ActivityIndicatorContainer>
    );
  }

  return (
    <>
      <TopRatedMainTitle>Top Rated Movies</TopRatedMainTitle>
      <TopRatedCardContainer
        horizontal
        showsHorizontalScrollIndicator={false}
        data={topRatedMovies.results}
        renderItem={({ item }) => <TopRatedCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const ActivityIndicatorContainer = styled.View`
  flex: ${1 / 3};
  height: ${SCREEN_HEIGHT / 3 + "px"};
  justify-content: center;
  align-items: center;
`;

const TopRatedMainTitle = styled.Text`
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  font-size: 20px;
  margin: 10px 10px 0 10px;
`;

const TopRatedCardContainer = styled(FlatList)`
  margin: 0 10px;
`;

export default TopRated;
