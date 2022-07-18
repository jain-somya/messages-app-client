import React from "react";

import axios from "../axios";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

export default function AddContact() {
  const [name, setName] = useState();

  const [num, setNum] = useState();
  const location = useLocation();

  async function handleForm(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/create/contact", {
        name,
        number: num,
      });
      alert(res.data.msg);
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
        <div className="w-full max-w-2xl py-5 px-5 py-10 m-auto  bg-white rounded-lg shadow dark:bg-gray-800">
          <div className=" ">
            <div className="  ">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="contact-form-name"
                className=" p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Name"
              />
            </div>
            <div className="  ">
              <input
                value={num}
                onChange={(e) => setNum(e.target.value)}
                type="text"
                id="contact-form-num"
                className=" p-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Number"
              />
            </div>

            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
