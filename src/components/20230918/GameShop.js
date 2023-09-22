import { BrowserRouter, Routes, Route } from "react-router-dom";
import games from "./db/Data";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Other } from "./Other";
import { Error } from "./Error";
import { SingleProduct } from "./SingleProduct";
import { ProductWrapper } from "./ProductWrapper";
import { createContext, useState } from "react";

export const GameContext = createContext();
const defaultCheckList = games.map((g) => {
  return { id: g.id, checked: false };
});

export function GameShop() {
  const [checkList, setCheckList] = useState(defaultCheckList);
  console.log(checkList);
  return (
    <>
      <GameContext.Provider value={{ checkList, setCheckList }}>
        <BrowserRouter>
          <Routes>
            {/*항상 최상위에 존재하기 위한 용도*/}
            <Route path="/" element={<NavBar />}>
              {/* 여기서 index의 의미는 자기 부모의 path를 가져와서 사용 */}
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              {/*Product를 숨기기 위한 껍데기용 부모*/}
              <Route path="Products" element={<ProductWrapper />}>
                <Route index element={<Products />} />
                <Route path=":id" element={<SingleProduct />} />
              </Route>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Other />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GameContext.Provider>
    </>
  );
}
