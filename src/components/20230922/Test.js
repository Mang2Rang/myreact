import styled from "styled-components";
import { useRef } from "react";

const Container = styled.div`
  width: 100px;
  height: 60px;
  background-color: beige;
`;
export function Test() {
  const Box = useRef(null);

  const Boxref = Box.current.getBoundingClientRect();
  console.log(Boxref);
  return (
    <>
      <Container ref={Box}></Container>
    </>
  );
}
