import React from "react";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";

function HomePage() {
  // const [total, setTotal] = useState({});
  // useEffect(() => {
  //   const fetchTotal = async () => {
  //     axios.get("/total").then((res) => {
  //       setTotal(res.data);
  //     });
  //   };
  //   fetchTotal();
  // }, []);
  return (
    <div className="grid place-items-center h-screen bg-blue-100">
      <div className="flex flex-col w-full md:w-2/4">
        {/* <div className="grid place-items-center mb-12">
          <h1 className="text-6xl">Contacts App</h1>
        </div> */}
        <div className="shadow-lg text-xl rounded-xl  p-8 bg-white dark:bg-gray-800 relative overflow-hidden">
          <Link to="/contacts">
            <div className="flex items-center mb-2 rounded justify-between   p-3 hover:bg-green-200 bg-green-100">
              <span className="rounded-lg p-2 bg-white">
                <ContactsOutlinedIcon />
              </span>
              <div className="flex w-full ml-2 items-center justify-between">
                <p>List of Contacts</p>
                {/* <p>{total?.totalContacts}</p> */}
              </div>
            </div>
          </Link>
          <Link to="/messages">
            <div className="flex items-center mb-2 rounded justify-between p-3 hover:bg-purple-200 bg-purple-100">
              <span className="rounded-lg p-2 bg-white">
                <MessageIcon />
              </span>
              <div className="flex w-full ml-2 items-center justify-between">
                <p>List of Messages Sent</p>
                {/* <p>{total?.totalMessages}</p> */}
              </div>
            </div>
          </Link>
          <Link to="/new-message">
            <div className="flex items-center mb-2 rounded justify-between p-3 hover:bg-yellow-200 bg-yellow-100">
              <span className="rounded-lg p-2 bg-white">
                <SendIcon />
              </span>
              <div className="flex w-full ml-2 items-center justify-between">
                <p>Send New Message</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
