// react hook form
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// assets
import meetingImage from "../../assets/meeting-img.webp";
import CustomInput from "../../form/CustomInput";
import CustomSelect from "../../form/CustomSelect";
// styles
import "./styles.css";

const MeetingInfo = () => {
  // for changing routes
  const navigate = useNavigate();

  // Form handling
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  // watchers
  const watchMeetingDate = watch("mdate");
  const watchEndTime = watch("etime");

  // Prevents the user from selecting past time
  const getMinimumTime = () => {
    // checks if current date is selected
    if (watchMeetingDate === new Date().toISOString().split("T")[0]) {
      return `${new Date().getHours()}:${new Date().getMinutes()}`;
    }
    return "";
  };

  const fetchBuildings = () => {
    return ["Building 1", "Building 2", "Building 3"];
  };

  // Form Submit
  const onSubmit = (data) => {
    console.log(data);
    navigate("room-selection");
  };

  return (
    <div className="parentContainer">
      <h1>Add Meeting</h1>
      <div className="container">
        <div className="formContainer">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label for="title">Title*</label>
            <CustomInput
              inputType="text"
              id="title"
              placeholder="Add title"
              register={register}
              className="formFields"
              errors={errors}
              isRequired
            />
            <label for="mdate">Date*</label>
            <CustomInput
              inputType="date"
              id="mdate"
              register={register}
              min={new Date().toISOString().split("T")[0]}
              className="formFields"
              errors={errors}
              isRequired
            />
            <label for="stime">Start Time*</label>
            <CustomInput
              inputType="time"
              id="stime"
              register={register}
              min={getMinimumTime()}
              max={watchEndTime}
              className="formFields"
              errors={errors}
              isRequired
            />
            <label for="etime">End Time*</label>
            <CustomInput
              inputType="time"
              id="etime"
              register={register}
              className="formFields"
              errors={errors}
              isRequired
            />
            <label for="building">Building*</label>
            <div className="select-wrapper">
              <CustomSelect
                id="building"
                register={register}
                className="formFields"
                errors={errors}
                options={fetchBuildings()}
                isRequired
              />
            </div>
            <button type="submit" className="nextBtn">
              Next
            </button>
          </form>
        </div>
        <img src={meetingImage} alt="Meeting" height="350px" width="350px" />
      </div>
    </div>
  );
};

export default MeetingInfo;
