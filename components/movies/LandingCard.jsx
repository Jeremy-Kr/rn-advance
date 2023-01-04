import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import useDarkMode from "../../hooks/useDarkMode";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../uitils/utils";

const poster1 =
  "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg";
const poster2 =
  "https://www.themoviedb.org/t/p/w1280/2mKLgFJ7eacZcB3fazrU8O4rkCO.jpg";

const LandingCard = () => {
  const { ratedIcon } = useDarkMode();
  return (
    <LandingViewContainer>
      <BackgroundGradient
        colors={["rgba(0,0,0,0.9)", "transparent"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        locations={[0, 1]}
      />
      <BackgroundImage source={{ uri: poster1 }} />
      <LandingDetailView>
        <LandingDetailPoster source={{ uri: poster2 }} resizeMode="cover" />
        <LandingDetailTextContainer>
          <LandingDetailTitle>웬즈데이</LandingDetailTitle>
          <LandingDetailStars>{ratedIcon} 8.7/10</LandingDetailStars>
          <LandingDetailContent numberOfLines={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quod
            neque ad odit porro expedita sint rerum laborum quas aperiam esse
            nihil! Impedit ipsa, aperiam voluptas iusto beatae explicabo
            placeat?
          </LandingDetailContent>
        </LandingDetailTextContainer>
      </LandingDetailView>
    </LandingViewContainer>
  );
};

const LandingViewContainer = styled.View`
  position: relative;
  height: 100%;
  width: 100%;
`;

const BackgroundImage = styled.Image`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const BackgroundGradient = styled(LinearGradient)`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const LandingDetailView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  padding: 10px;
  width: 100%;
`;

const LandingDetailTitle = styled.Text`
  color: ${({ theme }) => theme.reverseColor};
  font-size: 20px;
  font-weight: 800;
`;

const LandingDetailPoster = styled.Image`
  width: ${SCREEN_WIDTH / 3.5 + "px"};
  height: ${SCREEN_HEIGHT / 5 + "px"};
`;

const LandingDetailTextContainer = styled.View`
  flex: 1;
  height: 45%;
  margin-left: 10px;
`;

const LandingDetailStars = styled.Text`
  color: ${({ theme }) => theme.reverseColor};
  margin: 6px 0;
`;

const LandingDetailContent = styled.Text`
  color: ${({ theme }) => theme.reverseColor};
  text-overflow: ellipsis;
`;

export default LandingCard;
