import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Other } from "./Other";
import { Error } from "./Error";
import { SingleProduct } from "./SingleProduct";

export function GameShop() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            {/* 여기서 index의 의미는 자기 부모의 path를 가져와서 사용 */}
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />}>
              <Route path=":id" element={<SingleProduct />} />
            </Route>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Other />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
