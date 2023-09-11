import { Tab } from "./components/230911/Tab";
import { Session } from "./components/230911(session)/Session";
import { List } from "./components/230911/List";
//2개의 default export는 불가능
//default가 없을 경우 import 시 {}로 감싸주어야 함.

// component는 반드시 대문자로 시작하여야 함.
export default function App() {
  return (
    <>
      <Session />
    </>
  );
}

// export default App;
