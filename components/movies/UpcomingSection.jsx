import styled from "@emotion/native";

const poster2 =
  "https://www.themoviedb.org/t/p/w1280/2mKLgFJ7eacZcB3fazrU8O4rkCO.jpg";

const UpcomingSection = () => {
  return (
    <UpcomingSectionContainer>
      <UpcomingImage source={{ uri: poster2 }} resizeMode="contain" />
      <UpcomingDetailContainer>
        <UpcomingDetailTitle>웬즈데이</UpcomingDetailTitle>
        <UpcomingDetailDate>2022-12-02</UpcomingDetailDate>
        <UpcomingDetailContent numberOfLines={3}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          nesciunt molestiae expedita qui neque, eius perferendis porro
          inventore eos ea, odit iste beatae vitae! Veniam quibusdam et dolore
          vero blanditiis.
        </UpcomingDetailContent>
      </UpcomingDetailContainer>
    </UpcomingSectionContainer>
  );
};

const UpcomingSectionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  height: 185px;
  width: 100%;
  padding: 10px 5px;
`;

const UpcomingImage = styled.Image`
  width: 110px;
  border-radius: 10px;
`;

const UpcomingDetailContainer = styled.View`
  width: 100%;
  margin: 10px;
`;

const UpcomingDetailTitle = styled.Text`
  font-size: 18px;
  font-weight: 800;
`;

const UpcomingDetailDate = styled.Text`
  margin: 15px 0;
`;

const UpcomingDetailContent = styled.Text`
  width: 65%;
`;

export default UpcomingSection;
