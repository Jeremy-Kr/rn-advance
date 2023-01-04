import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import { Linking, Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import useDetail from "../../hooks/useDetail";
import { SCREEN_HEIGHT } from "../../utils/utils";
import { SimpleLineIcons } from "@expo/vector-icons";
import useDarkMode from "../../hooks/useDarkMode";

const Detail = ({
  navigation: { navigate },
  route: {
    params: { movieId },
  },
}) => {
  const { theme } = useDarkMode();
  const { detail, isLoading } = useDetail(movieId);

  if (isLoading) {
    return (
      <ActivityIndicatorContainer>
        <ActivityIndicator />
      </ActivityIndicatorContainer>
    );
  }

  const backdrop_uri = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}`;

  const handleOnPress = async (key) => {
    await Linking.openURL(`https://www.youtube.com/watch?v=${key}`);
  };

  return (
    <DetailContainer>
      <BackgroundGradient
        colors={["rgba(0,0,0,0.9)", "transparent"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        locations={[0, 1]}
      />
      <BackgroundImage source={{ uri: backdrop_uri }} />
      <DetailTitle>{detail.title}</DetailTitle>
      <DetailContentContainer>
        <DetailContentOverview>{detail.overview}</DetailContentOverview>
        {detail.videos?.results?.map((item) => (
          <DetailContentYoutubeContainer
            onPress={() => {
              handleOnPress(item.key);
            }}
          >
            <SimpleLineIcons
              name="social-youtube"
              size={24}
              color={theme.color}
            />
            <DetailContentYoutubeTitle numberOfLines={1}>
              {item.name}
            </DetailContentYoutubeTitle>
          </DetailContentYoutubeContainer>
        ))}
      </DetailContentContainer>
    </DetailContainer>
  );
};

const ActivityIndicatorContainer = styled.View`
  flex: ${1 / 3};
  height: ${SCREEN_HEIGHT / 3 + "px"};
  justify-content: center;
  align-items: center;
`;

const DetailContainer = styled.View``;

const BackgroundImage = styled.Image`
  position: absolute;
  height: ${SCREEN_HEIGHT / 3 + "px"};
  width: 100%;
  z-index: -1;
`;

const BackgroundGradient = styled(LinearGradient)`
  position: absolute;
  height: ${SCREEN_HEIGHT / 3 + "px"};
  width: 100%;
`;

const DetailTitle = styled.Text`
  top: ${SCREEN_HEIGHT / 3 - 70 + "px"};
  position: absolute;
  margin-left: 20px;
  color: ${({ theme }) => theme.reverseColor};
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 30px;
`;

const DetailContentContainer = styled.ScrollView`
  padding: 0 20px;
  height: ${(SCREEN_HEIGHT * 2) / 3 - 120 + "px"};
  margin-top: ${SCREEN_HEIGHT / 3 + "px"};
`;

const DetailContentOverview = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.color};
  margin: 20px 0;
`;

const DetailContentYoutubeTitle = styled.Text`
  color: ${({ theme }) => theme.color};
  margin-left: 14px;
  font-size: 16px;
`;

const DetailContentYoutubeContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 3px 0;
`;

export default Detail;
