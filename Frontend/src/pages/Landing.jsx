import React, { useState } from "react";
import axios from "axios";
  

export default function Landing() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("reader"); // Default qiymat

  const addUser = () => {
    const userlar = { name, username, email, role };
    console.log("User qo'shilmoqda...", userlar);

    axios
      .post("http://localhost:3000/api/v1/users", userlar)
      .then((res) => {
        console.log("✅ Muvaffaqiyatli:", res.data);
        // Inputlarni tozalash
        setName("");
        setUsername("");
        setEmail("");
        setRole("admin");
        // Userlar ro'yxatini yangilash
        getUsers();
      })
      .catch((err) => {
        console.error("❌ Xatolik:", err.response?.data || err.message);
      });
  };
  const getUsers = () => {
    console.log("So'rov yuborilmoqda...");
    axios
      .get("http://localhost:3000/api/v1/users")
      .then((res) => {
        // console.log("Muvaffaqiyatli:", res.data.users);
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.error("Xatolik xabari:", err.message);
      });
  };
  return (
    <div className="p-8 bg-gray-100 w-full h-full overflow-y-scroll">
      <h1 className="text-3xl font-bold mb-4">Landing</h1>
      <button
        className="rounded-md p-2 bg-green-400 hover:bg-green-500 transition-all duration-300 mb-6"
        onClick={getUsers}
      >
        Get Users
      </button>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mb-5">
        {users.map((user) => (
          <div
            key={user.id}
            className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="font-bold text-lg">{user.name}</p>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded inline-block mt-2">
              {user.role}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Yangi User Qo'shish</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="admin">Admin</option>
            <option value="librarian">Librarian</option>
            <option value="reader">Reader</option>
          </select>
          <button
            onClick={addUser}
            className="rounded-md p-2 bg-green-400 hover:bg-green-500 transition-all duration-300 font-semibold text-white"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}
