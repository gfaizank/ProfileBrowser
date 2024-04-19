import React from "react";

function ProfileComponent() {
  return (
    <div className="flex flex-col">
      <h1 className="ml-32 text-3xl font-bold mt-12">
        Academy Student Sign up
      </h1>

      <div className="flex flex-row ml-36 mt-8">
        <div className="flex flex-col">

         {/* Name and toggle button */}
          <div className="flex flex-row">
            <div className="flex flex-row text-center">
              <h1 className="mt-1">Name</h1>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="border rounded-md ml-4 px-2 py-1 text-gray-400"
              />
            </div>

            <div className="flex flex-row items-center ml-20">
              <h1 className="mr-2">Hireable</h1>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          {/* email */}
          <div className="flex flex-row text-center mt-8">
              <h1 className="mt-1">Email</h1>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="border rounded-md ml-5 px-2 py-1 text-gray-400"
              />
            </div>

            {/* password */}
            <div className="flex flex-row text-center mt-8">
              <h1 className="mt-1">Pass-</h1>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                className="border rounded-md ml-4 px-2 py-1 text-gray-400"
              />
            </div>


        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ProfileComponent;
