import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Tweets from "../../pages/Tweets";
import NotFound from "../../pages/NotFound";
import { Layout } from "../Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
