import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

//default export 된 항목을 import할 경우 {}필요없음
import games from "./db/Data";

export function SingleProduct() {
  //useParams는 react-router-dom이 제공하는 후크
  //URL을 읽어서 id를 전달해줌
  const { id } = useParams();

  //id를 통하여 DB로부터 게임의 정보를 가져옴
  const game = games.find((g) => g.id == id);
  //객체의 destructuring 문법
  const { title, genre, image, price, text } = game;
  console.log(id);

  const Container = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
  `;
  const Img = styled.img`
    width: 100%;
  `;
  const Content = styled.div`
    font-size: 0.8rem;
  `;

  return (
    <>
      <h3>{title}</h3>
      <Container>
        <Img src={image} />
        <Content>
          <p>타이틀 : {title}</p>
          <p>장르 : {genre}</p>
          <p>가격 : {price}</p>
          <p>{text}</p>
          <Link to="/products">목록으로 돌아가기</Link>
        </Content>
      </Container>
    </>
  );
}
