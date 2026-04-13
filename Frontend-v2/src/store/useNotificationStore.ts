import { create } from 'zustand';

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'alert' | 'success';
}

interface NotificationState {
  notifications: AppNotification[];
  addNotification: (notification: Omit<AppNotification, 'id' | 'read' | 'time'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [
    { id: 'NOT-1', title: "Qaytarmaslik", message: "Sardor Ikromov '1984' kitobini 2 kun kechiktirmoqda.", time: "10 daqiqa oldin", read: false, type: 'alert' },
    { id: 'NOT-2', title: "Yangi Kitob Kiritildi", message: "'Atomic Habits' asaridan 15 nusxa bazaga qo'shildi.", time: "1 soat oldin", read: false, type: 'success' },
    { id: 'NOT-3', title: "Tizim Yangilanishi", message: "Kechasi soat 00:00 da tizim profilaktikasi o'tkaziladi.", time: "1 kun oldin", read: true, type: 'info' },
  ],
  addNotification: (notification) => set((state) => ({
    notifications: [{ 
      ...notification, 
      id: `NOT-${Math.floor(Math.random() * 9000) + 1000}`,
      read: false, 
      time: "Hozirgina" 
    }, ...state.notifications]
  })),
  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map(n => n.id === id ? { ...n, read: true } : n)
  })),
  markAllAsRead: () => set((state) => ({
    notifications: state.notifications.map(n => ({ ...n, read: true }))
  }))
}));
