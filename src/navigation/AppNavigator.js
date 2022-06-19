import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Dashboard from "../components/Dashboard";
import MeetingInfo from "../components/MeetingInfo";
import RoomSelection from "../components/RoomSelection";
// Context
import { AppContextProvider } from "../context/AppContext";

const AppNavigator = () => (
  <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="meeting-info" element={<MeetingInfo />} />
        <Route path="room-selection" element={<RoomSelection />} />
      </Routes>
    </BrowserRouter>
  </AppContextProvider>
);

export default AppNavigator;
