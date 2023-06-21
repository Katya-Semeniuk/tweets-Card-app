import styled from "@emotion/styled";
// import { ReactComponent as LogoGoIt } from "../../icons/Logo.svg";

export const Box = styled.div`
  width: 380px;
  height: 460px;
  background-color: #471ca9;
  border-radius: 20px;
  box-shadow: -2.58px 6.87px 20.62px 0 rgba(0, 0, 0, 0.23);
`;
export const ImageWrapper = styled.div`
  padding-top: 28px;
  padding-left: 36px;
  padding-right: 36px;
`;

// export const Logo = styled(LogoGoIt)`
//   border: 1px solid red;
//   width: 76px;
//   height: 72px;
// `;

export const Button = styled.button`
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  width: 196px;
  height: 50px;
  padding: 14px 39px;
  color: #373737;
  background-color: #5cd3a8;
  border-radius: 10px;
  box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #5cd3a0;
    box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.27);
  }
`;
