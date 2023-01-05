import styled from "@emotion/native";
import { useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Landing from "../components/movies/Landing";
import TopRated from "../components/movies/TopRated";
import UpcomingSection from "../components/movies/UpcomingSection";
import useMovies from "../hooks/useMovies";
import { SCREEN_HEIGHT } from "../utils/utils";

const Movies = () => {
  const {
    isUpcomingMoviesLoading,
    upcomingMovies,
    refetchMovies,
    fetchNextUpcomingMovies,
  } = useMovies();
  const [isRefreshing, setIsRefreshing] = useState(false);

  if (isUpcomingMoviesLoading) {
    return (
      <ActivityIndicatorContainer>
        <ActivityIndicator />
      </ActivityIndicatorContainer>
    );
  }

  const handleOnRefresh = async () => {
    setIsRefreshing(true);
    await refetchMovies();
    setIsRefreshing(false);
  };

  return (
    <>
      <UpcomingSectionContainer
        onEndReached={fetchNextUpcomingMovies}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              handleOnRefresh();
            }}
          />
        }
        ListHeaderComponent={
          <>
            <Landing />
            <TopRated />
            <UpcomingMoviesMainTitle>Upcoming Movies</UpcomingMoviesMainTitle>
          </>
        }
        data={upcomingMovies.pages.map((page) => page.results).flat()}
        renderItem={({ item }) => <UpcomingSection item={item} />}
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

const UpcomingMoviesMainTitle = styled.Text`
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  font-size: 20px;
  margin: 10px 10px 0 10px;
`;

const UpcomingSectionContainer = styled(FlatList)`
  margin: 0;
`;

export default Movies;
