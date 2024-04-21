import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { MdDelete } from "react-icons/md";


function Browse() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("http://localhost:8000/people/allPeople")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectAllChange = () => {
    const newSelectedCheckboxes = {};
    users.forEach((user) => {
      newSelectedCheckboxes[user.id] = !selectAll;
    });
    setSelectedCheckboxes(newSelectedCheckboxes);
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (id) => {
    setSelectedCheckboxes({
      ...selectedCheckboxes,
      [id]: !selectedCheckboxes[id],
    });
  };

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-28 mt-12">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 mb-4 bg-white dark:bg-gray-900">
        <div>
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={handleDropdownToggle}
          >
            Action
            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute top-0 mt-10 left-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a></li>
              </ul>
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"/>
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block w-80 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Field of Interest
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Gravatar
              </th> */}
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${user.id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={selectedCheckboxes[user.id] || false}
                      onChange={() => handleCheckboxChange(user.id)}
                    />
                    <label htmlFor={`checkbox-table-search-${user.id}`} className="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img className="w-10 h-10 rounded-full" src={user.gravatar} alt={`${user.name}'s profile`} />
                  <div className="pl-3">
                    <div className="text-base font-semibold">{user.username}</div>
                    <div className="text-gray-500">{user.email}</div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  {user.location}
                </td>
                <td className="px-6 py-4">
                  {user.fieldOfInterest[0]}
                </td>
                {/* <td className="px-6 py-4">
                  <img src={user.gravatar} alt={`${user.name}'s gravatar`} className="w-10 h-10 rounded-full" />
                </td> */}
                <td className="px-6 py-4">
                  {user.status}
                </td>
                <td className="flex flex-row items-center px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                  <MdDelete className="ml-2 text-red-500 text-lg hover:text-red-300 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>
  );
}

export default Browse;
