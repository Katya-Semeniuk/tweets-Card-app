import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: #471ca9;
  text-decoration: none;

  &.active {
    color: red;
  }
`;
