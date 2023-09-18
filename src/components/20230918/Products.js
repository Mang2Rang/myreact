import { Outlet } from "react-router-dom";
import styled from "styled-components";

export function Products() {
  return (
    <>
      <h1>Products</h1>
      <Outlet />
    </>
  );
}
