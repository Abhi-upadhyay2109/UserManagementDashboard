import React from "react";

const UserTable = ({ users, deleteUser, setEditingUser }) => {
  return (
    <div className="overflow-x-auto shadow rounded bg-white">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Department</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
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
  );
};

export default UserTable;
