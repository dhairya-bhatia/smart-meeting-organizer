import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import MeetingInfo from "../components/MeetingInfo";
import RoomSelection from "../components/RoomSelection";

const AppNavigator = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="meeting-info" element={<MeetingInfo />} />
      <Route path="room-selection" element={<RoomSelection />} />
    </Routes>
  </BrowserRouter>
);

export default AppNavigator;
