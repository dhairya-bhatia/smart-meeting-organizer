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
              <h5>Total Buildings: 3</h5>
            </div>
            <div className="stats">
              <h3>Rooms</h3>
              <h5>Total Rooms: 3</h5>
              <h5>Rooms Available: 1</h5>
            </div>
            <div className="stats">
              <h3>Meetings</h3>
              <h5>Meetings Today: 3</h5>
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
