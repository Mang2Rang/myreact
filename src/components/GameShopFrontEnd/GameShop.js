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
import { ProtectedRoute } from "./ProtectedRoute";
import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { getAllGames } from "./api";

export const GameContext = createContext();

//비동기 방식에서 제어하기위해 매우 많이 사용하는 방식!!
export function GameShop() {
  const { data: games, isLoading: isGamesLoading } = useQuery(
    "games",
    getAllGames
  );
  return (
    <>
      {" "}
      {!isGamesLoading ? (
        <GameShopLoader games={games} isGamesLoading={isGamesLoading} />
      ) : null}
    </>
  );
}

function GameShopLoader({ games, isGamesLoading }) {
  const defaultCheckList = games.map((g) => {
    return { id: g.id, checked: false };
  });

  const [checkList, setCheckList] = useState(defaultCheckList);
  const [user, setUser] = useState({});
  //useQuery와 분리하기 위해 미사용
  // const { data: games, isLoading: isGamesLoading } = useQuery(
  //   "games",
  //   getAllGames
  // );

  return (
    <>
      <GameContext.Provider
        value={{
          checkList,
          setCheckList,
          user,
          setUser,
          games,
          isGamesLoading,
        }}
      >
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
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="login" element={<Login />} />
              <Route path="other" element={<Other />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GameContext.Provider>
    </>
  );
}
