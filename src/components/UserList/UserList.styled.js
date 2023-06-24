import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  width: 196px;
  height: 50px;
  padding: 14px 39px;
  color: #373737;
  background-color: #a090ea;
  border-radius: 10px;
  border: none;
  box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #9683ec;
    box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.3);
  }
`;
