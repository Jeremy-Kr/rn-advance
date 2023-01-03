import styled from "@emotion/native";

const poster2 =
  "https://www.themoviedb.org/t/p/w1280/2mKLgFJ7eacZcB3fazrU8O4rkCO.jpg";

const TopRatedCard = () => {
  return (
    <TopRatedCardContainer>
      <TopRatedImage source={{ uri: poster2 }} resizeMode="cover" />
      <TopRatedStars>⭐️ 8.7/10</TopRatedStars>
      <TopRatedTitle numberOfLines={1}>웬즈데이</TopRatedTitle>
    </TopRatedCardContainer>
  );
};

const TopRatedCardContainer = styled.View`
  height: 250px;
  width: 130px;
  margin: 10px;
  background-color: #8896ba;
  border-radius: 10px;
`;

const TopRatedImage = styled.Image`
  height: 185px;
  border-radius: 10px 10px 0 0;
`;

const TopRatedStars = styled.Text`
  color: #fff;
  font-weight: 800;
  margin-top: 10px;
  padding-left: 8px;
`;

const TopRatedTitle = styled.Text`
  color: #fff;
  font-weight: 800;
  margin-top: 8px;
  padding: 0 8px;
`;

export default TopRatedCard;
