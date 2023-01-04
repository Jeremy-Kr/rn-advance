import styled from "@emotion/native";
import { ActivityIndicator } from "react-native-paper";
import Swiper from "react-native-swiper";
import useMovies from "../../hooks/useMovies";
import { SCREEN_HEIGHT } from "../../utils/utils";
import LandingCard from "./LandingCard";

const Landing = () => {
  const { isLoading, nowPlayings } = useMovies();
  if (isLoading) {
    return (
      <ActivityIndicatorContainer>
        <ActivityIndicator />
      </ActivityIndicatorContainer>
    );
  }
  return (
    <SwiperContainer showsPagination={false} autoplay loop>
      {nowPlayings.map((item) => {
        return <LandingCard item={item} key={item.id} />;
      })}
    </SwiperContainer>
  );
};

const SwiperContainer = styled(Swiper)`
  height: ${SCREEN_HEIGHT / 3 + "px"};
`;

const ActivityIndicatorContainer = styled.View`
  flex: ${1 / 3};
  height: ${SCREEN_HEIGHT / 3 + "px"};
  justify-content: center;
  align-items: center;
`;

export default Landing;
