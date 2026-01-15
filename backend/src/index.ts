import express = require("express");
import cors = require("cors");

const app = express();

// CORS sozlamalari - Frontenddan so'rovlarni qabul qilish uchun
app.use(cors());
app.use(express.json());

const users: any[] = [
  {
    id: 1,
    name: "Muhammad",
    username: "muhammad",
    phone: "998991234567",
    email: "muhammad@gmail.com",
    password: "muhammad",
    role: "admin"
  },
  {
    id: 2,
    name: "Muhammad22",
    username: "muhammad22",
    phone: "998991234567",
    email: "muhammad22@gmail.com",
    password: "muhammad22",
    role: "librarian"
  },
  {
    id: 3,
    name: "Muhammad33",
    username: "muhammad33",
    phone: "998991234567",
    email: "muhammad33@gmail.com",
    password: "muhammad33", 
    role: "user"
  }
];

// POST - Yangi user qo'shish
app.post("/api/v1/users", (req: express.Request, res: express.Response) => {
  console.log("📥 POST so'rov keldi:", req.body);
  
  const { name, username, role, phone, password } = req.body;

  // validatsiya
  if (!name) {
    console.log("❌ Validatsiya xatosi: name bo'sh");
    return res.status(400).json({ message: "name bo'sh bo'lmasin" });
  }

  // Tekshirish: username mavjudmi?
  if (users.some(u => u.username === username)) {
    console.log("❌ Validatsiya xatosi: username mavjud");
    return res.status(400).json({ message: "Username allaqachon mavjud" });
  }

  // Tekshirish: telefon mavjudmi?
  if (users.some(u => u.phone === phone)) {
    console.log("❌ Validatsiya xatosi: telefon mavjud");
    return res.status(400).json({ message: "Telefon raqami allaqachon mavjud" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    username,
    phone,
    password,
    role,
  };

  users.push(newUser);
  console.log("✅ Yangi user qo'shildi:", newUser);
  console.log("📊 Hozirgi userlar soni:", users.length);

  return res.status(201).json({
    message: "User qo'shildi",
    data: newUser
  });
});

// GET - Barcha userlarni olish
app.get("/api/v1/users", (req: express.Request, res: express.Response) => {
  console.log("📤 GET so'rov keldi - userlar soni:", users.length);
  res.json({
    users: users
  });
});


// Serverni ishga tushirish
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
