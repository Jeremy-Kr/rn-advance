import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/utils";

const UpcomingSection = ({ item }) => {
  const { navigate } = useNavigation();
  const poster_uri = `https://www.themoviedb.org/t/p/w1280${item.poster_path}`;

  return (
    <UpcomingSectionContainer
      onPress={() =>
        navigate("Stacks", { screen: "Detail", params: { movieId: item.id } })
      }
    >
      <UpcomingImage source={{ uri: poster_uri }} resizeMode="contain" />
      <UpcomingDetailContainer>
        <UpcomingDetailTitle numberOfLines={1}>
          {item.title}
        </UpcomingDetailTitle>
        <UpcomingDetailDate>{item.release_date}</UpcomingDetailDate>
        <UpcomingDetailContent numberOfLines={5}>
          {item.overview}
        </UpcomingDetailContent>
      </UpcomingDetailContainer>
    </UpcomingSectionContainer>
  );
};

const UpcomingSectionContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: ${SCREEN_HEIGHT / 4.5 + "px"};
  width: 100%;
  padding: 10px 5px;
  margin-left: 10px;
`;

const UpcomingImage = styled.Image`
  width: ${SCREEN_WIDTH / 3.5 + "px"};
  border-radius: 10px;
`;

const UpcomingDetailContainer = styled.View`
  width: 100%;
  margin: 10px;
`;

const UpcomingDetailTitle = styled.Text`
  color: ${({ theme }) => theme.color};
  width: 60%;
  font-size: 18px;
  font-weight: 800;
`;

const UpcomingDetailDate = styled.Text`
  color: ${({ theme }) => theme.color};
  margin: 15px 0;
`;

const UpcomingDetailContent = styled.Text`
  color: ${({ theme }) => theme.color};
  width: 60%;
`;

export default UpcomingSection;
