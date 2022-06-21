import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { checkIfMeetingsClash } from "../../utils";
import "./styles.css";

const RoomSelection = () => {
  // for changing routes
  const navigate = useNavigate();
  // context
  const { meetingData, formData, handleMeetingData, handleFormData } =
    useContext(AppContext);

  // state
  const [buildingData, setBuildingData] = useState();

  // checks if room has a meeting scheduled b/w same time
  const isRoomSelectionDisabled = useCallback(
    (roomId) => {
      const selectedRoom = buildingData?.meetingRooms.find(
        (room) => room.roomId === roomId
      );
      return (
        selectedRoom?.meetings.find(
          (meetingObj) =>
            // meetings should be of same date
            formData?.mdate === meetingObj?.date &&
            checkIfMeetingsClash(
              meetingObj.startTime,
              meetingObj.endTime,
              formData?.stime,
              formData?.etime
            )
        ) !== undefined
      );
    },
    [
      buildingData?.meetingRooms,
      formData?.etime,
      formData?.mdate,
      formData?.stime
    ]
  );

  // Adds meeting to the meetingsData object
  const addMeetingData = (roomInfo) => {
    let tempMeetingDataObj = meetingData;
    tempMeetingDataObj
      .find((obj) => obj.id === parseInt(formData?.building))
      .meetingRooms.find((room) => room.roomId === roomInfo.roomId)
      .meetings.push({
        title: formData?.title,
        date: formData?.mdate,
        startTime: formData?.stime,
        endTime: formData?.etime
      });
    handleMeetingData(tempMeetingDataObj);
    handleFormData(null);
    navigate("/");
  };

  useEffect(() => {
    const buildingInfo = meetingData.find((obj) => {
      return Number(formData?.building) === obj.id;
    });
    setBuildingData(buildingInfo);
  }, [formData?.building, meetingData]);

  useEffect(() => {
    if (formData === null) {
      navigate("/", { replace: true });
    }
  }, [formData, navigate]);

  return (
    <div className="parentRoomContainer">
      <div className="selection-block">
        <div>
          <h2>Please select one of the Free Rooms</h2>
        </div>
        <div className="rooms-container">
          {buildingData?.meetingRooms?.map((room) => (
            <div key={room.roomId} className="rooms-info">
              <h1>{room.name}</h1>
              <div className="data-container">
                <h3>{buildingData?.name}</h3>
                <h3>Floor: {room?.floor}</h3>
              </div>
              <button
                type="button"
                className="selectRoomBtn"
                disabled={isRoomSelectionDisabled(room.roomId)}
                onClick={() => addMeetingData(room)}
              >
                Select Room
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
