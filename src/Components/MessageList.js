import { useEffect, useState } from "react";
import axios from "../axios";

function MessageList() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      axios.get("/messages").then((res) => {
        setMessages(res.data);
      });
    };
    fetchMessages();
  }, []);
  return (
    <div>
      {/* <Link to="/add-number">Add number</Link> */}
      <h2>Messages</h2>

      <table>
        <thead>
          <tr>
            <th>To</th>
            <th>From</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr>
              <td>{message.to}</td>
              <td>{message?.from}</td>
              <td>{message.msg}</td>
            </tr>
          ))}
        </tbody>
      </table></div>
  )
}

export default MessageList