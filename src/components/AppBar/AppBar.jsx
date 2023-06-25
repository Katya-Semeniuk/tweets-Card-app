import { Header, StyledLink, HomeIcon, Nav, Logo } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <Logo to="/">
        <HomeIcon />
        TWEETS-APP
      </Logo>

      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/tweets"> Tweets</StyledLink>
      </Nav>
    </Header>
  );
};
