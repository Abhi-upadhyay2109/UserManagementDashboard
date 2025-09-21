import React, { useState, useEffect } from "react";

const UserForm = ({ addUser, editUser, editingUser, setEditingUser }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: { name: "" },
  });

  useEffect(() => {
    if (editingUser) {
      setForm(editingUser);
    } else {
      setForm({ firstName: "", lastName: "", email: "", company: { name: "" } });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email) {
      return alert("First Name, Last Name & Email are required");
    }

    if (editingUser) editUser(form);
    else addUser(form);

    setForm({ firstName: "", lastName: "", email: "", company: { name: "" } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row md:items-center gap-3 mb-6 justify-center"
    >
      <input
        type="text"
        placeholder="First Name"
        className="border px-3 py-2 rounded w-full md:w-48"
        value={form.firstName}
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="border px-3 py-2 rounded w-full md:w-48"
        value={form.lastName}
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="border px-3 py-2 rounded w-full md:w-64"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Department"
        className="border px-3 py-2 rounded w-full md:w-64"
        value={form.company.name}
        onChange={(e) => setForm({ ...form, company: { name: e.target.value } })}
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        {editingUser ? "Update" : "Add"} User
      </button>
      {editingUser && (
        <button
          type="button"
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          onClick={() => setEditingUser(null)}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default UserForm;
