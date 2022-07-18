import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MessageList from "./Components/MessageList";
import ContactsPage from "./Components/ContactsPage";
import SendMessage from "./Components/SendMessage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route path="/new-message" element={<SendMessage></SendMessage>}></Route>
      <Route path="/contacts" element={<ContactsPage></ContactsPage>}></Route>
      <Route path="/contact" element={<></>}></Route>
      <Route path="/messages" element={<MessageList></MessageList>}></Route>
    </Routes>
  );
}

export default App;
