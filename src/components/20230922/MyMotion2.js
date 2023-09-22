import styled from "styled-components";
import { motion, useAnimationControls } from "framer-motion";
import { useRef } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #d0e, #91f);
`;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  padding: 15px;
`;

let BoxX = null;
let BoxY = null;
let value = 200;
const Move = {
  left: { x: -value, transition: { duration: 0.5 } },
  right: { x: +value, transition: { duration: 0.5 } },
  center: { x: 0, y: 0, transition: { duration: 0.5 } },
  up: { y: -value, transition: { duration: 0.5 } },
  down: { y: +value, transition: { duration: 0.5 } },
};

const Btn = styled.button`
  width: 100px;
  height: 60px;
  text-align: center;
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
`;
export function MyMotion2() {
  const control = useAnimationControls();
  const BoxPosition = useRef(null);

  function onClickLeft() {
    control.start("left");
    BoxX = BoxPosition.current.getBoundingClientRect().left;
    BoxX = BoxX - value;
    console.log(BoxX);
  }
  function onClickCenter() {
    control.start("center");
    BoxX = BoxPosition.current.getBoundingClientRect().left;
    console.log(BoxX);
  }
  function onClickRight() {
    control.start("right");
    console.log(value);
    console.log(BoxX);
  }
  function onClickUp() {
    control.start("up");
  }
  function onClickDown() {
    control.start("down");
  }

  return (
    <>
      <Container>
        <Box ref={BoxPosition} variants={Move} animate={control} />
        <Btn $top="100px" $left="200px" onClick={onClickLeft}>
          Left
        </Btn>
        <Btn $top="40px" $left="300px" onClick={onClickUp}>
          Up
        </Btn>
        <Btn $top="100px" $left="300px" onClick={onClickCenter}>
          Center
        </Btn>
        <Btn $top="100px" $left="400px" onClick={onClickRight}>
          Right
        </Btn>
        <Btn $top="160px" $left="300px" onClick={onClickDown}>
          Down
        </Btn>
      </Container>
    </>
  );
}
