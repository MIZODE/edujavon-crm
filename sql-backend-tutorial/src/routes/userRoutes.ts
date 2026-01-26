// src/routes/userRoutes.ts
import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUsersByCity,              // Yangi
  searchUsersByEmail,          // Yangi
  getUsersByAgeRange,          // Yangi
  getUsersWithPagination,      // Yangi
  getUsersFromCities           // Yangi
} from '../controllers/userController';

const router = Router();

// Asosiy CRUD
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// Qidirish va filtr
router.get('/city/:city', getUsersByCity);
router.get('/search/email', searchUsersByEmail);
router.get('/filter/age-range', getUsersByAgeRange);
router.get('/paginate/list', getUsersWithPagination);
router.get('/filter/cities', getUsersFromCities);

export default router;