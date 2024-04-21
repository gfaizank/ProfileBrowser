import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

function ProfileComponent() {
  const seekingOptions = [
    { value: "Internship", label: "Internship" },
    { value: "Remote", label: "Remote" },
    { value: "FT Position", label: "FT Position" },
    { value: "Not Seeking", label: "Not Seeking" },
  ];


  return (
    <div className="flex flex-col">
      <h1 className="ml-32 text-3xl font-bold mt-4">Academy Student Sign up</h1>

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

          {/* confirm-password */}
          <div className="flex flex-row text-center mt-8">
            <h1 className="mt-1">Pass-</h1>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Confirm password"
              className="border rounded-md ml-4 px-2 py-1 text-gray-400"
            />
          </div>

          {/* date of grad */}
          <div className="flex flex-row text-center mt-8">
            <h1 className="mt-1">Date of Grad.</h1>
            <div className="relative max-w-sm ml-4 mt-[-4px]">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* github */}
          <div className="flex flex-row text-center mt-8">
            <h1 className="mt-1">Github</h1>
            <input
              type="text"
              name="github"
              id="github"
              placeholder="Your github"
              className="border rounded-md ml-4 px-2 py-1 text-gray-400"
            />
          </div>

          {/* website and location */}
          <div className="flex flex-row mt-8">
            <div className="flex flex-row text-center">
              <h1 className="mt-1">Website</h1>
              <input
                type="url"
                name="website"
                id="website"
                placeholder="Your website"
                className="border rounded-md ml-4 px-2 py-1 text-gray-400"
              />
            </div>

            <div className="flex flex-row text-center ml-4">
              <h1 className="mt-1">Location</h1>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Your location"
                className="border rounded-md ml-2 px-2 py-1 text-gray-400"
              />
            </div>
          </div>

          {/* bio */}
          <div className="flex flex-row text-center mt-6">
            <h1 className="mt-1">Bio</h1>
            <textarea
              type="text"
              name="bio"
              id="bio"
              placeholder="Your bio"
              className="border rounded-md ml-4 px-2 py-1 text-gray-400 w-[512px]"
            />
          </div>
        </div>

        <div className="border h-[516px] w-1 ml-12 bg-black"></div>

        <div className="flex flex-col ml-8">
          {/* PROFILE */}
          <div className="flex flex-row text-center items-center ml-8">
            <h1 className="mt-1">Upload Profile Pic</h1>
            <FaCirclePlus className="ml-4" />
            <div className="relative inline-flex items-center justify-center w-36 h-36 ml-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-5xl text-gray-600 dark:text-gray-300">
                JL
              </span>
            </div>
          </div>

          {/* field of interest */}

          <div className="flex flex-row text-center items-center mt-8 ml-8">
            <h1 className="mt-1">Interest</h1>
            <select
              id="interest"
              name="interest"
              className="block w-full ml-8 rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
              multiple
            >
              <option disabled>Choose an interest</option>
              <option value="Engineering">Engineering</option>
              <option value="Security">Security</option>
              <option value="Management">Management</option>
            </select>
          </div>

          {/* seeking */}

          <div className="flex flex-row text-center mt-8 ml-8">
            <h1 className="mt-1">Seeking</h1>
            <select
              id="seeking"
              name="seeking"
              className="block w-full ml-8 rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
              multiple 
            >
              
              <option disabled>Choose roles (multiple)</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
              <option value="FT Position">FT Position</option>
              <option value="Not Seeking">Not Seeking</option>
            </select>
          </div>

          {/* techstack */}
          <div className="flex flex-row text-center mt-8 ml-8">
            <h1 className="mt-1">TechStack</h1>
            <select
              id="techStack"
              name="techStack"
              className="block w-full ml-8 rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
              multiple
            >
              <option disabled >Choose a Tech Stack</option>
              <option value="Ruby">Ruby</option>
              <option value="Rails">Rails</option>
              <option value="Javascript">Javascript</option>
              <option value="Html/Css3">Html/Css3</option>
            </select>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ProfileComponent;
