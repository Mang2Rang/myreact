import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

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

const BiggerBox = styled.div`
  width: 1000px;
  height: 800px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
`;

const gesture = {
  hover: { scale: 1.2, rotateZ: 90 },
  tap: { scale: 0.8, rotateZ: -90, borderRadius: "100%" },
  drag: { backgroundColor: "rgb(46,204,113)" },
};

export function Gesture() {
  //useRef의 또 다른 사용법 = DOM객체를 직접 사용할 수 있게 해줌.
  //React는 가상DOM(=Virtual DOM)을 사용하므로 실제 DOM을 액세스할  수 없고,
  //useRef만이 할 수 있음.
  const bigBoxRef = useRef(null);
  return (
    <>
      <Container>
        <BiggerBox ref={bigBoxRef}>
          <Box
            variants={gesture}
            drag
            dragConstraints={bigBoxRef}
            // dragSnapToOrigin
            // dragElastic={1}
            whileHover="hover"
            whileTap="tap"
            whileDrag="drag"
          />
        </BiggerBox>
      </Container>
    </>
  );
}
