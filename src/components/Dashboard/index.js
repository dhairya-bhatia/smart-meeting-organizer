// react
import { useContext } from "react";
// react-router
import { useNavigate } from "react-router-dom";
// context
import { AppContext } from "../../context/AppContext";
// assets
import meetingRoom from "../../assets/meeting-room.jpeg";
import "./styles.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const { meetingData } = useContext(AppContext);

  // returns total rooms in all the buildings
  const totalRooms = () => {
    return meetingData.reduce((total, currentVal) => {
      return (total += currentVal.meetingRooms.length);
    }, 0);
  };

  // returns total meetings scheduled for today
  const meetingsToday = () => {
    let totalMeetingsToday = 0;
    meetingData.forEach((element) => {
      if (element.meetingRooms.length) {
        element.meetingRooms.forEach((obj) => {
          // adding the length of items array that passed the criteria to "totalMeetingsToday"
          totalMeetingsToday += obj.meetings.filter((meetingObj) => {
            return meetingObj.date === new Date().toISOString().split("T")[0];
          }).length;
        });
      }
    });
    return totalMeetingsToday;
  };

  return (
    <div className="root-container">
      <div className="dashboard-container">
        <div>
          <img
            src={meetingRoom}
            alt="meeting-room"
            height="auto"
            width="590px"
          />
        </div>
        <div className="info-container">
          <h2>Smart Meeting Organizer</h2>
          <div className="stats-container">
            <div className="stats">
              <h3>Buildings</h3>
              <h5>Total Buildings: {meetingData.length}</h5>
            </div>
            <div className="stats">
              <h3>Rooms</h3>
              <h5>Total Rooms: {totalRooms()}</h5>
            </div>
            <div className="stats">
              <h3>Meetings</h3>
              <h5>Meetings Today: {meetingsToday()}</h5>
            </div>
          </div>
        </div>
        <div className="addMeetingBtn-container">
          <button
            type="button"
            className="addMeetingBtn"
            onClick={() => navigate("meeting-info")}
          >
            Add a Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
