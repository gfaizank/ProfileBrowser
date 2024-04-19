import React from "react";
import Avatar from "./avatar";
import { FaCheckCircle } from "react-icons/fa";

function Profiles() {
  return (
    <div className="flex flex-row min-h-screen bg-white mt-16 lg:ml-72 gap-4">
      <div className="flex flex-col rounded-md border h-36 w-60 mt-1">
        <div className="bg-gray-200 h-12 items-center ">
          <h1 className="text-center mt-2.5 text-gray-700">Search Graduates</h1>
        </div>
        <input
          type="text"
          placeholder="Name, keywords, tech stack"
          className="mt-2 py-1.5 px-1 mx-2 justify-center border rounded-md"
        />
        <hr className="mt-2" />
        <button className="justify-center border rounded-md bg-blue-600 text-white w-52 my-1.5 mx-4 py-1">
          Search
        </button>
      </div>

      <div className="flex flex-col ml-4">
        <div className="flex flex-row border rounded-xl w-[600px] h-48 pt-4">
          <div className="ml-4 mt-4">
            <Avatar />
          </div>

          <div className="flex flex-col ml-6 mt-2 w-80">
            <h1 className="font-bold text-xl">Jane Walker</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod id nisi illum distinctio rem dolores, alias vitae maxime ratione ut?</p>
            <div className="flex flex-row mt-4">
                <button className="border p-1 bg-gray-100 rounded-md text-xs">Ruby</button>
                <button className="border p-1 ml-2 bg-gray-100 rounded-md text-xs">HTML</button>
                <button className="border p-1 ml-2 bg-gray-100 rounded-md text-xs">CSS</button>
                <button className="border p-1 ml-2 bg-gray-100 rounded-md text-xs">Javascript</button>
                <button className="border p-1 ml-2 bg-gray-100 rounded-md text-xs">Mongo</button>
                <button className="border p-1 ml-2 bg-gray-100 rounded-md text-xs">Reactjs</button>
            </div>
          </div>

          <div className="flex flex-col text-center items-center mt-2 ml-4">
            <div className="flex flex-row items-center">
                <FaCheckCircle className="text-sm" />
                <p className="ml-1 text-sm">Unavailable</p>
            </div>
            <button className="bg-blue-500 border rounded-md text-white mt-2 p-1 text-sm">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
