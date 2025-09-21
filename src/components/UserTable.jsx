import React, { useState } from "react";

const UserTable = ({ users, deleteUser, setEditingUser }) => {
  const [filterPopup, setFilterPopup] = useState(false);
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const filteredUsers = users.filter((user) => {
    const firstName = user.firstName || "";
    const lastName = user.lastName || "";
    const email = user.email || "";
    const department = user.company?.name || "";

    return (
      firstName.toLowerCase().includes(filters.firstName.toLowerCase()) &&
      lastName.toLowerCase().includes(filters.lastName.toLowerCase()) &&
      email.toLowerCase().includes(filters.email.toLowerCase()) &&
      department.toLowerCase().includes(filters.department.toLowerCase())
    );
  });

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
        onClick={() => setFilterPopup(!filterPopup)}
      >
        {filterPopup ? "Close Filters" : "Open Filters"}
      </button>

      {filterPopup && (
        <div className="absolute bg-white p-4 border rounded shadow-md z-10 mb-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <input
              type="text"
              placeholder="First Name"
              className="border px-2 py-1 rounded w-32"
              value={filters.firstName}
              onChange={(e) => setFilters({ ...filters, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border px-2 py-1 rounded w-32"
              value={filters.lastName}
              onChange={(e) => setFilters({ ...filters, lastName: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="border px-2 py-1 rounded w-48"
              value={filters.email}
              onChange={(e) => setFilters({ ...filters, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Department"
              className="border px-2 py-1 rounded w-48"
              value={filters.department}
              onChange={(e) => setFilters({ ...filters, department: e.target.value })}
            />
          </div>
        </div>
      )}

      <div className="overflow-x-auto shadow rounded bg-white mt-2">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">First Name</th>
              <th className="border px-4 py-2 text-left">Last Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Department</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.firstName}</td>
                <td className="border px-4 py-2">{user.lastName}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.company?.name || "N/A"}</td>
                <td className="border px-4 py-2 flex gap-2">
                  <button
                    className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                    onClick={() => setEditingUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
