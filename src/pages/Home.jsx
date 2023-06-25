import {
  Container,
  Title,
  Text,
  ContentBox,
  StyledNavLink,
} from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <ContentBox>
        <Title>Welcome to Home Page</Title>
        <Text>
          Enjoy viewing users cards and easily find out their details.
          <br />
          Change follower status and save it in one click.
        </Text>

        <StyledNavLink to="/tweets"> start now</StyledNavLink>
      </ContentBox>
    </Container>
  );
};
export default Home;
