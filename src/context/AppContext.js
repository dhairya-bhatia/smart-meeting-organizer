import React, { createContext, useState, useEffect } from "react";
import initialMeetingData from "../data/dummyData";
export const AppContext = createContext();

export function AppContextProvider({ children }) {
  // The whole object containing meeting, rooms and building data
  const [meetingData, setMeetingData] = useState(initialMeetingData);
  // Loader for whenever App is not ready to show the UI`
  const [isLoading, setIsLoading] = useState(false);

  const handleAppLaunch = () => {
    setIsLoading(true);
    // check if data exists in local storage,
    // if present save into initial state
    setIsLoading(false);
  };

  useEffect(() => {
    handleAppLaunch();
  }, []);

  const handleMeetingData = (data) => setMeetingData(data);

  const value = {
    meetingData,
    handleMeetingData,
    isAppLoading: isLoading
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
