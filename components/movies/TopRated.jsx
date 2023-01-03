import styled from "@emotion/native";
import TopRatedCard from "./TopRatedCard";

const TopRated = () => {
  return (
    <>
      <TopRatedMainTitle>Top Rated Movies</TopRatedMainTitle>
      <TopRatedContainer horizontal={true}>
        <TopRatedCard />
        <TopRatedCard />
        <TopRatedCard />
        <TopRatedCard />
        <TopRatedCard />
        <TopRatedCard />
        <TopRatedCard />
        <TopRatedCard />
        <TopRatedCard />
        <TopRatedCard />
      </TopRatedContainer>
    </>
  );
};

const TopRatedMainTitle = styled.Text`
  font-size: 20px;
  margin: 10px 10px 0 10px;
`;

const TopRatedContainer = styled.ScrollView``;

export default TopRated;
