import "./App.css";
import Homepage from "./pages/HomePage";
import { Route } from "react-router-dom";
import Chatpage from "./pages/ChatPage";
import ChoosingPage from "./pages/ChoosingPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/choose" component={ChoosingPage} />
    </div>
  );
}

export default App;
