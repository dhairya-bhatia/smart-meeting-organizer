import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import "./styles.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const { meetingData } = useContext(AppContext);

  return (
    <div className="root">
      <div className="boardPin" />
      <div className="infoBlock">
        <div>
          <h1>Buildings: 4</h1>
        </div>
        <div>
          <h1>Rooms</h1>
          <h3>Total Rooms: 20</h3>
          <h3>Rooms Available: 5</h3>
        </div>
        <div>
          <h1>Meeting Rooms</h1>
          <h3>Total Rooms: 20</h3>
          <h3>Rooms Available: 5</h3>
        </div>
      </div>
      <button
        type="button"
        className="addMeetingBtn"
        onClick={() => navigate("meeting-info")}
      >
        Add a Meeting
      </button>
    </div>
  );
};

export default Dashboard;
