import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MessageList from "./Components/MessageList";
import ContactsPage from "./Components/ContactsPage";
import AddContact from "./Components/AddContact";
import SendMessage from "./Components/SendMessage";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route
          path="/new-message"
          element={<SendMessage></SendMessage>}
        ></Route>
        <Route path="/add-contact" element={<AddContact></AddContact>}></Route>

        <Route path="/contacts" element={<ContactsPage></ContactsPage>}></Route>
        <Route path="/contact" element={<></>}></Route>
        <Route path="/messages" element={<MessageList></MessageList>}></Route>
      </Routes>
    </div>
  );
}

export default App;
