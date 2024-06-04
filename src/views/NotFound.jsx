import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center pt-5">
      <img
        src="https://i.postimg.cc/Fz7Z3kp4/error.png"
        title="error"
        alt="error"
      />
      <p className="fs-2 mt-4">
        El link que intentas usar <span className="fw-bold">no existe</span>{" "}
      </p>
    </Container>
  );
};
