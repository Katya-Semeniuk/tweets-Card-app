import { NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";

export const AppBar = () => {
  return (
    <header>
      <FcHome />
      <NavLink to="/"> Home </NavLink>
    </header>
  );
};
