import React, { useEffect, useState } from "react";
const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => setUsers(data.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-3xl mx-auto hover:border border-gray-500 rounded">
      <h1 className="text-2xl italic font-bold mb-4 underline">
        Employee List
      </h1>
      <input
        type="text"
        placeholder="Search by first name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full italic text-lg font-bold p-2 border rounded mb-6 focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:border-gray-700 dark:text-gray-400 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
      />
      <table className="w-full border-2 rounded-lg justify-center border-black-300 table-auto">
        <thead className="text-blue-900 cursor-default">
          <tr className="bg-yellow-400 border-2">
            <th className="border p-2 text-4xl font-sans italic">ID</th>
            <th className="border p-2 text-4xl font-sans italic">First Name</th>
            <th className="border p-2 text-4xl font-sans italic">Last Name</th>
            <th className="border p-2 text-4xl font-sans italic">Email</th>
          </tr>
        </thead>
        <tbody className="border-blue-200">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="text-center hover:bg-blue-100 border-2 text-green-900 font-bold cursor-pointer"
              >
                <td className="border p-2 font-bold text-3xl text-gray-800">
                  {user.id}
                </td>
                <td className="border p-2 font-semibold italic text-xl transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-110 duration-100 hover:text-lg">
                  {user.first_name}
                </td>
                <td className="border p-2 font-semibold italic text-xl transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-110 duration-100 hover:text-lg">
                  {user.last_name}
                </td>
                <td className="border p-2 font-semibold italic text-xl transition ease-in-out delay-100 hover:-translate-x-1 hover:scale-110 duration-100 hover:text-lg">
                  {user.email}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No matching users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default App;
