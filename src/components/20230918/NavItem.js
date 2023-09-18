import styled from "styled-components";

const Container = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
  & i {
    font-size: 1.8rem;
    margin-bottom: 3px;
  }
  & span {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;
export function NavItem({ icon, name }) {
  return (
    <>
      <Container>
        <i className={icon}></i>
        <span>{name}</span>
      </Container>
    </>
  );
}
