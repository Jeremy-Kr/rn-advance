import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import useDarkMode from "../../hooks/useDarkMode";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/utils";

const LandingCard = ({ item }) => {
  const { navigate } = useNavigation();
  const { ratedIcon } = useDarkMode();

  const poster_uri = `https://www.themoviedb.org/t/p/w1280${item.poster_path}`;
  const backdrop_uri = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}`;

  return (
    <LandingViewContainer
      onPress={() =>
        navigate("Stacks", { screen: "Detail", params: { movieId: item.id } })
      }
    >
      <BackgroundGradient
        colors={["rgba(0,0,0,0.9)", "transparent"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        locations={[0, 1]}
      />
      <BackgroundImage source={{ uri: backdrop_uri }} />
      <LandingDetailView>
        <LandingDetailPoster source={{ uri: poster_uri }} resizeMode="cover" />
        <LandingDetailTextContainer>
          <LandingDetailTitle numberOfLines={1}>
            {item.title}
          </LandingDetailTitle>
          <LandingDetailStars>
            {ratedIcon} {item.vote_average}/10
          </LandingDetailStars>
          <LandingDetailContent numberOfLines={4}>
            {item.overview}
          </LandingDetailContent>
        </LandingDetailTextContainer>
      </LandingDetailView>
    </LandingViewContainer>
  );
};

const LandingViewContainer = styled.TouchableOpacity`
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
  height: 48%;
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
