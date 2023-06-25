import styled from "@emotion/styled";

export const Box = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background-color: var(--primary-blue-color);
  border-radius: 20px;
  box-shadow: -2.58px 6.87px 20.62px 0 rgba(0, 0, 0, 0.23);
`;
export const LogoImg = styled.img`
  padding-top: 20px;
  padding-left: 20px;
`;

export const Bg_Images = styled.img`
  position: absolute;
  left: 36px;
  top: 28px;
`;
export const HorizontalLine = styled.div`
  width: 380px;
  height: 8px;
  margin-top: 172px;

  background-color: var(--primary-pink-color);
  box-shadow: 0 3.4369285106658936px 3.4369285106658936px 0 rgba(0, 0, 0, 0.06),
    inset 0 -1.7184642553329468px 3.4369285106658936px 0 #ae7be3;
`;
export const StyledAvatar = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  left: calc(50% - 50px);
  top: 175px;
  border-radius: 50%;
  background-color: white;
  border: 9px solid #ebd8ff;
  box-shadow: 0 4.391631126403809px 4.391631126403809px 0 rgba(0, 0, 0, 0.06),
    inset 0 -2.1958155632019043px 4.391631126403809px 0 #ae7be3;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const Wrapp = styled.div`
  display: grid;
  gap: 16px;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 62px;
  margin-bottom: 26px;
`;

export const UserInfo = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: var(--text-light-color);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  width: 196px;
  height: 50px;
  padding: 14px 39px;
  color: var(--text-dark-color);
  background-color: var(--primary-pink-color);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.25);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s;

  &:hover,
  &:focus {
    box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.4);
    background-color: var(--accent-pink-color);
  }
`;

export const ButtonAktiv = styled.button`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  width: 196px;
  height: 50px;
  padding: 14px 39px;
  color: var(--text-dark-color);
  background-color: var(--primary-green-color);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.25);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s;

  &:hover,
  &:focus {
    background-color: var(--accent-green-color);
    box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.4);
  }
`;
