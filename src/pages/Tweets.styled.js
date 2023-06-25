import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNav = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 1.2;
  padding: 8px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  &:hover,
  &:focus {
    color: #471ca9;
  }
`;
