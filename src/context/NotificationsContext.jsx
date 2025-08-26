// src/context/NotificationsContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { db } from "../firebase";
import { collection, addDoc, query, orderBy, onSnapshot, updateDoc, doc, where } from "firebase/firestore";
import { AuthContext } from "./AuthContext";

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!user) return; // Only fetch if user is logged in

    // Query notifications for the current user
    const q = query(
      collection(db, "notifications"),
      where("ownerId", "==", user.uid),
      orderBy("time", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setNotifications(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      },
      (error) => {
        console.error("Firestore error:", error);
      }
    );

    return () => unsubscribe();
  }, [user]);

  const createNotification = async (message) => {
    if (!user || !message.trim()) return;

    await addDoc(collection(db, "notifications"), {
      message,
      read: false,
      ownerId: user.uid,
      time: new Date()
    });
  };

  const markAllAsRead = async () => {
    const unread = notifications.filter(n => !n.read);
    await Promise.all(
      unread.map(n => updateDoc(doc(db, "notifications", n.id), { read: true }))
    );
  };

  const markAsRead = async (id) => {
    await updateDoc(doc(db, "notifications", id), { read: true });
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationsContext.Provider
      value={{ notifications, createNotification, markAllAsRead, markAsRead, unreadCount }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
