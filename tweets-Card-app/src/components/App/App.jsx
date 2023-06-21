import { Route, Routes, NavLink } from "react-router-dom";
import Home from "../../pages/Home";
import Tweets from "../../pages/Tweets";
import NotFound from "../../pages/NotFound";
import { AppBar } from "../AppBar/AppBar";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/"> Our Home page </NavLink>
          </li>
          <li>
            <NavLink to="/tweets"> Our Tweets page</NavLink>
          </li>
          <li>
            <AppBar />
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
