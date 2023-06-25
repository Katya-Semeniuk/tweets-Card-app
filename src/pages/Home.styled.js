import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-image: linear-gradient(
      rgba(34, 35, 53, 0.7),
      rgba(34, 35, 53, 0.8)
    ),
    url(https://blog.ingate.ru/upload/medialibrary/f13/2.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  height: calc(100vh - 90px);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const ContentBox = styled.div`
  padding-top: 35px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 45px;
  font-weight: 700;
  color: white;
`;
export const Text = styled.p`
  color: var(--text-light-color);
  font-size: 25px;
  margin-bottom: 50px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-weight: 400;
  border: 1px solid var(--primary-green-color);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: var(--text-light-color);
    border: 2px solid var(--accent-green-color);
  }
`;
