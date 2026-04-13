import { create } from 'zustand';

export interface Book {
  id: string;
  title: string;
  author: string;
  copies: number;
  category: string;
  status: 'Mavjud' | 'Tugagan';
}

export interface User {
  id: string;
  name: string;
  role: string;
  readingScore: number;
  phone: string;
  joined: string;
}

export interface Rent {
  id: string;
  user: string;
  book: string;
  date: string;
  dueDate: string;
  status: 'Active' | 'Overdue' | 'Returned';
  fine: number;
}

interface AppSettings {
  finePerDay: number;
  maxRentsPerUser: number;
  systemName: string;
}

interface AppState {
  books: Book[];
  users: User[];
  rents: Rent[];
  settings: AppSettings;
  addBook: (book: Book) => void;
  addUser: (user: User) => void;
  addRent: (rent: Rent) => void;
  returnRent: (id: string, fine: number) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
}

export const useAppStore = create<AppState>((set) => ({
  books: [
    { id: 'ISBN-1029', title: "Clean Code", author: "Robert C. Martin", copies: 5, category: "Dasturlash", status: 'Mavjud' },
    { id: 'ISBN-6531', title: "Alkimyogar", author: "Paulo Coelho", copies: 2, category: "Badiiy", status: 'Mavjud' },
    { id: 'ISBN-8812', title: "Kichkina Shahzoda", author: "Antuan de Sent-Ekzyuperi", copies: 0, category: "Bolalar", status: 'Tugagan' },
    { id: 'ISBN-1190', title: "Steve Jobs", author: "Walter Isaacson", copies: 3, category: "Biografiya", status: 'Mavjud' },
    { id: 'ISBN-9921', title: "Atomic Habits", author: "James Clear", copies: 12, category: "Rivojlanish", status: 'Mavjud' }
  ],
  users: [
    { id: 'USR-8821', name: "Firdavs Asadov", role: "SuperAdmin", readingScore: 500, phone: "+998 90 123 45 67", joined: "12 Mar 2025" },
    { id: 'USR-3412', name: "Diyorbek (Manager)", role: "Manager", readingScore: 250, phone: "+998 99 876 54 32", joined: "15 Apr 2025" },
    { id: 'USR-1192', name: "Malika Nazarova", role: "Librarian", readingScore: 120, phone: "+998 33 000 11 22", joined: "01 May 2025" },
    { id: 'USR-5001', name: "Aziz Raximov", role: "User", readingScore: 10, phone: "+998 94 455 66 77", joined: "Bugun" },
    { id: 'USR-5002', name: "Sardor Ikromov", role: "User", readingScore: 80, phone: "+998 91 222 33 44", joined: "Kecha" },
  ],
  rents: [
    { id: 'RN-1029', user: "Aziz Raximov", book: "Clean Code", date: "05 Okt 2025", dueDate: "19 Okt 2025", status: 'Active', fine: 0 },
    { id: 'RN-6531', user: "Dilnoza Murodova", book: "Atomic Habits", date: "01 Okt 2025", dueDate: "15 Okt 2025", status: 'Active', fine: 0 },
    { id: 'RN-8812', user: "Sardor Ikromov", book: "Alkimyogar", date: "15 Sen 2025", dueDate: "29 Sen 2025", status: 'Overdue', fine: 15000 },
    { id: 'RN-1190', user: "Olim Olimov", book: "Harry Potter", date: "10 Sen 2025", dueDate: "24 Sen 2025", status: 'Returned', fine: 0 },
  ],
  settings: {
    finePerDay: 2000,
    maxRentsPerUser: 5,
    systemName: "Edujavon Library CRM"
  },
  addBook: (book) => set((state) => ({ books: [book, ...state.books] })),
  addUser: (user) => set((state) => ({ users: [user, ...state.users] })),
  addRent: (rent) => set((state) => ({ rents: [rent, ...state.rents] })),
  returnRent: (id, fine) => set((state) => ({ 
    rents: state.rents.map(r => r.id === id ? { ...r, status: 'Returned', fine } : r) 
  })),
  updateSettings: (newSettings) => set((state) => ({ settings: { ...state.settings, ...newSettings } }))
}));
