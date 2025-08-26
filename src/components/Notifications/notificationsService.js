// src/components/Notifications/notificationsService.js
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  where,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

// Listen for notifications of a specific user
export const listenForNotifications = (userId, callback) => {
  if (!userId) return () => {};

  const q = query(
    collection(db, "notifications"),
    where("userId", "==", userId),
    orderBy("time", "desc")
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const notifications = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(notifications);
  });

  return unsubscribe;
};

// Add a new notification
export const addNotification = async (userId, message) => {
  if (!userId || !message.trim()) return;

  await addDoc(collection(db, "notifications"), {
    userId,
    message,
    time: serverTimestamp(),
    read: false,
  });
};

// Mark a notification as read
export const markNotificationAsRead = async (id) => {
  const notifRef = doc(db, "notifications", id);
  await updateDoc(notifRef, { read: true });
};

// Mark all notifications as read
export const markAllNotificationsAsRead = async (notifications) => {
  await Promise.all(
    notifications
      .filter((n) => !n.read)
      .map((n) => markNotificationAsRead(n.id))
  );
};
