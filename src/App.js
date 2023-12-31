import { Tab } from "./components/20230911/Tab";
import { Session } from "./components/20230911(session)/Session";
import { List } from "./components/20230911/List";
import { AvatarList } from "./components/20230912/AvatarList";
import { PropsTest } from "./components/20230912/PropsTest";
import { CounterState } from "./components/20230912/CounterState";
import { Home } from "./components/20230913/Home";
import { Gallery } from "./components/20230914/Gallery";
import { OpenWeather } from "./components/20230914/OpenWeather";
import { MyRef } from "./components/20230915/MyRef";
import { MyRouter } from "./components/20230915/MyRouter";
import { createGlobalStyle } from "styled-components";
//import { GameShop } from "./components/20230918/GameShop";
import { UseContext } from "./components/20230919/UseContext";
import { MyMotion1 } from "./components/20230922/MyMotion1";
import { Gesture } from "./components/20230922/Gesture";
import { MyMotion2 } from "./components/20230922/MyMotion2";
import { GameShop } from "./components/GameShopFrontEnd/GameShop";
import { QueryClient, QueryClientProvider } from "react-query";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    font-family: Poppins, GmarketSansMedium;
  }
`;
const client = new QueryClient();

//2개의 default export는 불가능
//default가 없을 경우 import 시 {}로 감싸주어야 함.

// component는 반드시 대문자로 시작하여야 함.
export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <GameShop />
      </QueryClientProvider>
    </>
  );
}

// export default App;
