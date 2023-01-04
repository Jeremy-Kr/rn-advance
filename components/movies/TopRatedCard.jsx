import styled from "@emotion/native";
import useDarkMode from "../../hooks/useDarkMode";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/utils";

const TopRatedCard = ({ item }) => {
  const { ratedIcon } = useDarkMode();

  const poster_uri = `https://www.themoviedb.org/t/p/w1280${item.poster_path}`;

  return (
    <TopRatedCardContainer>
      <TopRatedImage source={{ uri: poster_uri }} resizeMode="cover" />
      <TopRatedStars>
        {ratedIcon} {item.vote_average}/10
      </TopRatedStars>
      <TopRatedTitle numberOfLines={1}>{item.title}</TopRatedTitle>
    </TopRatedCardContainer>
  );
};

const TopRatedCardContainer = styled.View`
  width: ${SCREEN_WIDTH / 3.5 + "px"};
  height: ${SCREEN_HEIGHT / 3.7 + "px"};
  margin: 10px;
  background-color: ${({ theme }) => theme.brand50};
  border-radius: 10px;
`;

const TopRatedImage = styled.Image`
  height: ${SCREEN_HEIGHT / 5 + "px"};
  border-radius: 10px 10px 0 0;
`;

const TopRatedStars = styled.Text`
  color: ${({ theme }) => theme.reverseColor};
  font-weight: 800;
  margin-top: 10px;
  padding-left: 8px;
`;

const TopRatedTitle = styled.Text`
  color: ${({ theme }) => theme.reverseColor};
  font-weight: 800;
  margin-top: 8px;
  padding: 0 8px;
`;

export default TopRatedCard;
