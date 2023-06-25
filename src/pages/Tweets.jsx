import { UserList } from "../components/UserList/UserList";
import { BsArrowLeft } from "react-icons/bs";
import { StyledNav } from "./Tweets.styled";
const Tweets = () => {
  return (
    <div>
      <StyledNav to="/">
        <BsArrowLeft />
        Back
      </StyledNav>
      <UserList />
    </div>
  );
};
export default Tweets;
