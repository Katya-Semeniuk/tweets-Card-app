import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import { GeneralContainer } from "./Layout.styled";

export const Layout = () => {
  return (
    <GeneralContainer>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </GeneralContainer>
  );
};
