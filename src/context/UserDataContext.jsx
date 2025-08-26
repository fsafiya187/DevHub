// src/context/UserDataContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { db } from "../firebase";
import { collection, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { AuthContext } from "./AuthContext";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({
    savedNotes: [],
    savedLinks: [],
    completedChallenges: [],
    theme: "light",
  });

  // Fetch user data from Firestore
  useEffect(() => {
    if (!user) return;

    const userDocRef = doc(db, "users", user.uid);

    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        // Create document if not exists
        setDoc(userDocRef, data);
      }
    });

    return () => unsubscribe();
  }, [user]);

  // Update Firestore whenever data changes
  const updateUserData = async (newData) => {
    if (!user) return;
    setData(newData);
    await setDoc(doc(db, "users", user.uid), newData);
  };

  const setTheme = (theme) => updateUserData({ ...data, theme });

  const addNote = (note) => updateUserData({ ...data, savedNotes: [...data.savedNotes, note] });
  const removeNote = (id) =>
    updateUserData({ ...data, savedNotes: data.savedNotes.filter((n) => n.id !== id) });

  const addSavedLink = (link) => updateUserData({ ...data, savedLinks: [...(data.savedLinks || []), link] });
  const removeSavedLink = (url) =>
    updateUserData({ ...data, savedLinks: (data.savedLinks || []).filter((l) => l.url !== url) });

  const completeChallenge = (challenge) =>
    updateUserData({ ...data, completedChallenges: [...data.completedChallenges, { ...challenge, date: new Date() }] });

  const clearAll = () =>
    updateUserData({ ...data, savedNotes: [], savedLinks: [], completedChallenges: [] });

  return (
    <UserDataContext.Provider
      value={{
        data,
        setTheme,
        addNote,
        removeNote,
        savedLinks: data.savedLinks || [],
        addSavedLink,
        removeSavedLink,
        completeChallenge,
        clearAll,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
