import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";
import toast from "react-hot-toast";


const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch {
      alert("Failed to fetch users");
    }
  };

const addUser = async (user) => {
  try {
    const maxId = users.length ? Math.max(...users.map(u => u.id)) : 0;
    const newUser = { ...user, id: maxId + 1 };
    await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
    setUsers([...users, newUser]);
    toast.success("User added successfully!");
  } catch {
    toast.error("Failed to add user");
  }
};


 const editUser = async (user) => {
  try {
    await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
    setEditingUser(null);
    toast.success("User updated successfully!");
  } catch {
    toast.error("Failed to update user");
  }
};

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((u) => u.id !== id));
       toast.success("User delete successfully!");
    } catch {
     toast.error("Failed to update user");
    }
  };

  const filteredUsers = users
    .filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) &&
        (filterDept ? u.company?.name.toLowerCase().includes(filterDept.toLowerCase()) : true)
    )
    .slice((page - 1) * limit, page * limit);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User Management Dashboard</h1>

      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <input
          type="text"
          placeholder="Search by name"
          className="border rounded px-3 py-2 w-full md:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by department"
          className="border rounded px-3 py-2 w-full md:w-64"
          value={filterDept}
          onChange={(e) => setFilterDept(e.target.value)}
        />
      </div>

      <UserForm
        addUser={addUser}
        editUser={editUser}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />

      <UserTable users={filteredUsers} deleteUser={deleteUser} setEditingUser={setEditingUser} />

      <Pagination page={page} setPage={setPage} limit={limit} setLimit={setLimit} />
    </div>
  );
};

export default Dashboard;