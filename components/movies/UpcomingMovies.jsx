import styled from "@emotion/native";
import UpcomingSection from "./UpcomingSection";

const UpcomingMovies = () => {
  return (
    <>
      <UpcomingMoviesMainTitle>Upcoming Movies</UpcomingMoviesMainTitle>
      <UpcomingSection />
      <UpcomingSection />
    </>
  );
};

const UpcomingMoviesMainTitle = styled.Text`
  color: ${({ theme }) => theme.color};
  font-weight: 700;
  font-size: 20px;
  margin: 10px 10px 0 10px;
`;

export default UpcomingMovies;
