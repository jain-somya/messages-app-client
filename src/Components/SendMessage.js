import React from "react";

import axios from "../axios";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

export default function SendMessage({ to }) {
  const [text, setText] = useState(
    `Hi! Your Otp is: ${Math.floor(100000 + Math.random() * 900000)}`
  );
  const [num, setNum] = useState(to);
  const location = useLocation();
  useEffect(() => {
    setNum(location.state?.to);
  }, []);
  async function handleForm(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/create/message", {
        msg: text,
        to: num,
      });
    alert(res.data.msg)
    } catch (err) {
      alert("Please check that your Number is in this format: +91989998232");
    }
  }
  return (
    <div className="grid place-items-center h-screen bg-blue-100">
      <form
        onSubmit={(e) => handleForm(e)}
        className="flex w-full max-w-sm space-x-3"
      >
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Send OTP
          </div>
          <div className=" ">
            <div className=" relative ">
              <input
                value={num}
                onChange={(e) => setNum(e.target.value)}
                type="text"
                id="contact-form-name"
                className=" p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="To"
              />
            </div>

            <div className="">
              <label className="text-gray-700" htmlFor="name">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="comment"
                  placeholder="Enter Message"
                  name="comment"
                  rows={5}
                  cols={40}
                />
              </label>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
