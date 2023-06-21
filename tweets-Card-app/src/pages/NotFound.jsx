import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <titl>404 page not found</titl>
      <NavLink to="/">Back to Homepage</NavLink>
    </div>
  );
};

export default NotFound;
