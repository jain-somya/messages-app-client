import { useEffect, useState } from "react";
import axios from "../axios";
import { Avatar, IconButton } from "@mui/material";

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
    <div className="grid place-items-center h-screen">
      {/* <Link to="/add-number">Add number</Link> */}
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      To
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Message
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((message) => (
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="block relative">
                              <Avatar
                                className="mx-auto object-cover rounded-full h-10 w-10 "
                                src={`https://avatars.dicebear.com/api/human/${
                                  Math.random() * 5000
                                }.svg`}
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {message.to}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {message.msg}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          { (message?.created?.seconds*1000 +message?.created?.nanoseconds*0.001) ? `${new Date(message.created.seconds*1000 +message.created.nanoseconds*0.001).toISOString()}` :''  }
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          className={`relative inline-block px-3 py-1 font-semibold text-${
                            message.status ? "green" : "red"
                          }-900 leading-tight`}
                        >
                          <span
                            aria-hidden="true"
                            className={`absolute inset-0 bg-${
                              message.status ? "green" : "red"
                            }-200 opacity-50 rounded-full`}
                          ></span>
                          <span className="relative">
                            {message.status ? "Success" : "Failed"}
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageList;
