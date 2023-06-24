import { FcHome } from "react-icons/fc";
import { StyledLink } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <FcHome />
            <StyledLink to="/"> Home </StyledLink>
          </li>
          <li>
            <StyledLink to="/tweets"> Tweets</StyledLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
