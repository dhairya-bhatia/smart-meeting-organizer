import React, { createContext, useEffect, useState } from "react";
import initialMeetingData from "../data/dummyData";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  // The whole object containing meeting, rooms and building data
  const [meetingData, setMeetingData] = useState(initialMeetingData);
  const [formData, setFormData] = useState(null);

  const handleMeetingData = (data) => setMeetingData(data);
  const handleFormData = (data) => setFormData(data);

  useEffect(() => {
    if (localStorage.getItem("meetingData")) {
      setMeetingData(JSON.parse(localStorage.getItem("meetingData")));
    }
  }, []);

  const value = {
    meetingData,
    formData,
    handleMeetingData,
    handleFormData
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
