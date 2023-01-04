import styled from "@emotion/native";
import Swiper from "react-native-swiper";
import { SCREEN_HEIGHT } from "../../uitils/utils";
import LandingCard from "./LandingCard";

const Landing = () => {
  return (
    <SwiperContainer showsPagination={false} autoplay loop>
      <LandingCard />
      <LandingCard />
      <LandingCard />
    </SwiperContainer>
  );
};

const SwiperContainer = styled(Swiper)`
  height: ${SCREEN_HEIGHT / 3 + "px"};
`;

export default Landing;
