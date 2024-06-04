import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center pt-5">
      <h1 className="mb-2">
        Biendenido a <span className="fw-bold fst-italic">Happy Cake</span>
      </h1>
      <p className="mb-4">El lugar de los pasteles felices</p>
      <img
        src="https://i.postimg.cc/1RG517rD/cake.png"
        title="torta"
        alt="torta"
      />
    </Container>
  );
};
