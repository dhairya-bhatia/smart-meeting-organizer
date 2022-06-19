import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { checkIfMeetingsClash } from "../../utils";
import "./styles.css";

const RoomSelection = () => {
  // context
  const { meetingData, formData, handleMeetingData } = useContext(AppContext);

  // state
  const [buildingData, setBuildingData] = useState();

  const isRoomSelectionDisabled = useCallback(
    (roomId) => {
      const selectedRoom = buildingData?.meetingRooms.find(
        (room) => room.roomId === roomId
      );
      return (
        selectedRoom?.meetings.find((meetingObj) =>
          checkIfMeetingsClash(
            meetingObj.startTime,
            meetingObj.endTime,
            formData?.stime,
            formData?.etime
          )
        ) !== undefined
      );
    },
    [buildingData?.meetingRooms, formData?.etime, formData?.stime]
  );

  useEffect(() => {
    const buildingInfo = meetingData.find((obj) => {
      return Number(formData?.building) === obj.id;
    });
    setBuildingData(buildingInfo);
  }, [formData?.building, meetingData]);

  return (
    <div className="parentContainer">
      <h2>Please select one of the Free Rooms</h2>
      <div className="rooms-container">
        {buildingData?.meetingRooms?.map((room) => (
          <button
            className="meeting-room"
            disabled={isRoomSelectionDisabled(room.roomId)}
            key={room.roomId}
          >
            <div className="rooms-info">
              <div>{room.name}</div>
              <div>{buildingData?.name}</div>
              <div>Floor: {room?.floor}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoomSelection;
