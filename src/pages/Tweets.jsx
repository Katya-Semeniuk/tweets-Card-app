import { NavLink } from "react-router-dom";
import { UserList } from "../components/UserList/UserList";
import { BsArrowLeft } from "react-icons/bs";
const Tweets = () => {
  return (
    <div>
      <button type="button">
        <BsArrowLeft />
        <NavLink to="/"> Back </NavLink>
      </button>
      <UserList />
    </div>
  );
};
export default Tweets;
