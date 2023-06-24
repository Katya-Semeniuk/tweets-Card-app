import { RotatingLines } from "react-loader-spinner";
import { Container } from "./Loader.styled";

export const Loader = () => {
  return (
    <Container>
      <RotatingLines
        height="100"
        width="100"
        strokeColor=" #471ca9"
        ariaLabel="loader"
      />
    </Container>
  );
};
