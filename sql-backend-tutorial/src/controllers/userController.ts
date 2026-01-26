// src/controllers/userController.ts
import { Request, Response } from 'express';
import { pool } from '../config/database';

// ============================================
// 1. SELECT - Barcha userlarni olish
// ============================================
export async function getAllUsers(req: Request, res: Response) {
  try {
    console.log('📋 Barcha userlarni olish...');
    
    // SQL query
    const query = 'SELECT * FROM users ORDER BY id ASC';
    
    // Query'ni bajarish
    const result = await pool.query(query);
    
    // result.rows - natija array
    // result.rowCount - nechta qator topildi
    console.log(`✅ ${result.rowCount} ta user topildi`);
    
    res.json({
      success: true,
      count: result.rowCount,
      data: result.rows
    });
  } catch (error) {
    console.error('❌ Xato:', error);
    res.status(500).json({
      success: false,
      error: 'Serverda xato yuz berdi'
    });
  }
}

// ============================================
// 2. SELECT with WHERE - ID bo'yicha user olish
// ============================================
export async function getUserById(req: Request, res: Response) {
  try {
    const { id } = req.params;  // URL'dan ID olish
    console.log(`🔍 ID=${id} bo'yicha user qidirish...`);
    
    // Parametrli query ($1 - birinchi parameter)
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [id];
    
    const result = await pool.query(query, values);
    
    // Agar topilmasa
    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        error: `ID=${id} bo'lgan user topilmadi`
      });
    }
    
    console.log(`✅ User topildi: ${result.rows[0].name}`);
    
    res.json({
      success: true,
      data: result.rows[0]  // Birinchi (va yagona) natija
    });
  } catch (error) {
    console.error('❌ Xato:', error);
    res.status(500).json({
      success: false,
      error: 'Serverda xato yuz berdi'
    });
  }
}

// ============================================
// 3. INSERT - Yangi user yaratish
// ============================================
export async function createUser(req: Request, res: Response) {
  try {
    const { name, email, age, city } = req.body;
    console.log(`➕ Yangi user yaratish: ${email}`);
    
    // Validatsiya
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Name va email majburiy'
      });
    }
    
    // INSERT query with RETURNING
    // RETURNING - yangi yaratilgan qatorni qaytaradi
    const query = `
      INSERT INTO users (name, email, age, city)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [name, email, age, city];
    
    const result = await pool.query(query, values);
    
    console.log(`✅ User yaratildi: ID=${result.rows[0].id}`);
    
    res.status(201).json({
      success: true,
      message: 'User muvaffaqiyatli yaratildi',
      data: result.rows[0]
    });
  } catch (error: any) {
    console.error('❌ Xato:', error);
    
    // Unique constraint violation (email takrorlangan)
    if (error.code === '23505') {
      return res.status(400).json({
        success: false,
        error: 'Bu email allaqachon ro\'yxatdan o\'tgan'
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Serverda xato yuz berdi'
    });
  }
}

// ============================================
// 4. UPDATE - User ma'lumotlarini yangilash
// ============================================
export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, email, age, city } = req.body;
    console.log(`✏️ User yangilash: ID=${id}`);
    
    // UPDATE query
    const query = `
      UPDATE users
      SET 
        name = COALESCE($1, name),
        email = COALESCE($2, email),
        age = COALESCE($3, age),
        city = COALESCE($4, city)
      WHERE id = $5
      RETURNING *
    `;
    // COALESCE - agar yangi qiymat NULL bo'lsa, eski qiymatni saqlaydi
    
    const values = [name, email, age, city, id];
    const result = await pool.query(query, values);
    
    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        error: `ID=${id} bo'lgan user topilmadi`
      });
    }
    
    console.log(`✅ User yangilandi: ${result.rows[0].name}`);
    
    res.json({
      success: true,
      message: 'User muvaffaqiyatli yangilandi',
      data: result.rows[0]
    });
  } catch (error: any) {
    console.error('❌ Xato:', error);
    
    if (error.code === '23505') {
      return res.status(400).json({
        success: false,
        error: 'Bu email boshqa user tomonidan ishlatilmoqda'
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Serverda xato yuz berdi'
    });
  }
}

// ============================================
// 5. DELETE - User o'chirish
// ============================================
export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    console.log(`🗑️ User o'chirish: ID=${id}`);
    
    // DELETE query
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const values = [id];
    
    const result = await pool.query(query, values);
    
    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        error: `ID=${id} bo'lgan user topilmadi`
      });
    }
    
    console.log(`✅ User o'chirildi: ${result.rows[0].name}`);
    
    res.json({
      message: 'User muvaffaqiyatli o\'chirildi',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Xato:', error);
    res.status(500).json({
      success: false,
      error: 'Serverda xato yuz berdi'
    });
  }
}



// src/controllers/userController.ts
// ... oldingi kodlar ...

// ============================================
// 6. SELECT with WHERE - Shahar bo'yicha qidirish
// ============================================
export async function getUsersByCity(req: Request, res: Response) {
  try {
    const { city } = req.params;  // URL'dan shahar nomi
    console.log(`🔍 ${city} shahridan userlarni qidirish...`);
    
    // WHERE clause bilan
    const query = `
      SELECT 
        id, 
        name, 
        email, 
        age, 
        city
      FROM users
      WHERE city = $1
      ORDER BY name ASC
    `;
    const values = [city];
    
    const result = await pool.query(query, values);
    
    console.log(`✅ ${result.rowCount} ta user topildi`);
    
    res.json({
      success: true,
      city: city,
      count: result.rowCount,
      data: result.rows
    });
  } catch (error) {
    console.error('❌ Xato:', error);
    res.status(500).json({
      success: false,
      error: 'Serverda xato yuz berdi'
    });
  }
}

// ============================================
// 7. SELECT with LIKE - Email bo'yicha qidirish
// ============================================
export async function searchUsersByEmail(req: Request, res: Response) {
  try {
    const { search } = req.query;  // Query parameter: ?search=gmail
    
    if (!search) {
      return res.status(400).json({
        success: false,
        error: 'search parametri kerak. Misol: /api/users/search?search=gmail'
      });
    }
    
    console.log(`🔍 Email'da "${search}" bo'lgan userlarni qidirish...`);
    
    // LIKE operator - pattern matching
    // %gmail% - email ichida "gmail" bo'lsa
    const query = `
      SELECT 
        id, 
        name, 
        email, 
        city
      FROM users
      WHERE email LIKE $1
      ORDER BY name ASC
    `;
    const values = [`%${search}%`];  // %search% pattern
    
    const result = await pool.query(query, values);
    
    console.log(`✅ ${result.rowCount} ta user topildi`);
    
    res.json({
      success: true,
      search: search,
      count: result.rowCount,
      data: result.rows
    });
  } catch (error) {
    console.error('❌ Xato:', error);
    res.status(500).json({
      success: false,
      error: 'Serverda xato yuz berdi'
    });
  }
}

// ============================================
// 8. SELECT with BETWEEN - Yosh oralig'i bo'yicha
// ============================================
export async function getUsersByAgeRange(req: Request, res: Response) {
  try {
    const { min, max } = req.query;  // ?min=20&max=30
    
    if (!min || !max) {
      return res.status(400).json({
        success: false,
        error: 'min va max parametrlari kerak. Misol: /api/users/age-range?min=20&max=30'
      });
    }
    
    console.log(`🔍 ${min} dan ${max} gacha yoshdagi userlar...`);
    
    // BETWEEN operator
    const query = `
      SELECT 
        id, 
        name, 
        email, 
        age, 
        city
      FROM users
      WHERE age BETWEEN $1 AND $2
      ORDER BY age ASC
    `;
    const values = [min, max];
    
    const result = await pool.query(query, values);
    
    console.log(`✅ ${result.rowCount} ta user topildi`);
    
    res.json({
      success: true,
      ageRange: { min, max },
      count: result.rowCount,
      data: result.rows
    });
  } catch (error) {
    console.error('❌ Xato:', error);
    res.status(500).json({
      success: false,
      error: 'Serverda xato yuz berdi'
    });
  }
}

// ============================================
// 9. SELECT with LIMIT and OFFSET - Pagination
// ============================================
export async function getUsersWithPagination(req: Request, res: Response) {
  try {
    // Query parameters: ?page=1&limit=10
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    
    // OFFSET hisoblash
    const offset = (page - 1) * limit;
    
    console.log(`📄 Sahifa ${page}, har birida ${limit} ta user...`);
    
    // Umumiy userlar soni (pagination uchun kerak)
    const countQuery = 'SELECT COUNT(*) FROM users';
    const countResult = await pool.query(countQuery);
    const totalUsers = parseInt(countResult.rows[0].count);
    
    // Ma'lumotlarni olish
    const query = `
      SELECT 
        id, 
        name, 
        email, 
        age, 
        city
      FROM users
      ORDER BY id ASC
      LIMIT $1 OFFSET $2
    `;
    const values = [limit, offset];
    
    const result = await pool.query(query, values);
    
    // Jami sahifalar soni
    const totalPages = Math.ceil(totalUsers / limit);
    
    console.log(`✅ ${result.rowCount} ta user (jami ${totalUsers})`);
    
    res.json({
      success: true,
      pagination: {
        currentPage: page,
        perPage: limit,
        totalUsers: totalUsers,
        totalPages: totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      },
      data: result.rows
    });
  } catch (error) {
    console.error('❌ Xato:', error);
    res.status(500).json({
      success: false,
      error: 'Serverda xato yuz berdi'
    });
  }
}

// ============================================
// 10. SELECT with IN - Ko'p shaharlardan qidirish
// ============================================
export async function getUsersFromCities(req: Request, res: Response) {
  try {
    // Query parameter: ?cities=Tashkent,Samarkand,Bukhara
    const citiesParam = req.query.cities as string;
    
    if (!citiesParam) {
      return res.status(400).json({
        success: false,
        error: 'cities parametri kerak. Misol: /api/users/from-cities?cities=Tashkent,Samarkand'
      });
    }
    
    // String'ni array'ga o'girish
    const cities = citiesParam.split(',');
    
    console.log(`🔍 ${cities.join(', ')} shaharlaridan userlar...`);
    
    // IN operator - ro'yxatdagi qiymatlardan biri bo'lsa
    // ANY($1) - PostgreSQL'da array bilan ishlash
    const query = `
      SELECT 
        id, 
        name, 
        email, 
        city
      FROM users
      WHERE city = ANY($1)
      ORDER BY city, name
    `;
    const values = [cities];
    
    const result = await pool.query(query, values);
    
    console.log(`✅ ${result.rowCount} ta user topildi`);
    
    res.json({
      success: true,
      cities: cities,
      count: result.rowCount,
      data: result.rows
    });
  } catch (error) {
    console.error('❌ Xato:', error);
    res.status(500).json({
      success: false,
      error: 'Serverda xato yuz berdi'
    });
  }
}






// // src/controllers/userController.ts
// import { User, Prisma } from '@prisma/client';
// import { prisma } from '../config/prisma';

// // ============================================
// // Type-safe user yaratish
// // ============================================
// export async function createUserWithPrisma(data: Prisma.UserCreateInput): Promise<User> {
//   const user = await prisma.user.create({
//     data: {
//       name: data.name,
//       email: data.email,
//       age: data.age,
//       city: data.city
//     }
//   });

//   return user;  // Type: User ✅
// }

// // ============================================
// // IntelliSense ishlaydi! ✨
// // ============================================
// const user = await prisma.user.findFirst({
//   where: {
//     email: 'test@example.com'
//   }
// });

// // TypeScript autocomplete:
// console.log(user.name);     // ✅ OK
// console.log(user.email);    // ✅ OK
// console.log(user.nme);      // ❌ Error: Property 'nme' does not exist