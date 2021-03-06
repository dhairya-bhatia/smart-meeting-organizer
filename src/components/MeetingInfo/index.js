// react hook form
import { useContext } from "react";
import { useForm } from "react-hook-form";
// react-router
import { useNavigate } from "react-router-dom";
// context
import { AppContext } from "../../context/AppContext";
// Custom Form Helpers
import CustomInput from "../../form/CustomInput";
import CustomSelect from "../../form/CustomSelect";
// assets
import meetingImage from "../../assets/meeting-image.jpeg";
// styles
import "./styles.css";

const MeetingInfo = () => {
  // for changing routes
  const navigate = useNavigate();

  // context
  const { meetingData, formData, handleFormData } = useContext(AppContext);

  // Form handling
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: formData ? formData : ""
  });

  // watchers
  const watchMeetingDate = watch("mdate");

  /*   functions   */

  // Prevents the user from selecting past time
  const getMinimumTime = () => {
    // checks if current date is selected
    if (watchMeetingDate === new Date().toISOString().split("T")[0]) {
      // adding a leading 0 to current Hours and mins for correct comparison
      //    as watch function returns the time with a leading 0
      let currentHourWithLeadingZero = String(new Date().getHours()).padStart(
        2,
        0
      );
      let currentMinsWithLeadingZero = String(new Date().getMinutes()).padStart(
        2,
        0
      );
      return `${currentHourWithLeadingZero}:${currentMinsWithLeadingZero}`;
    }
    return "";
  };

  // maps the whole array of objects to fetch building's name and id
  const buildingsData = meetingData?.map((obj) => ({
    id: obj.id,
    name: obj.name
  }));
  // Form Submit
  const onSubmit = (data) => {
    handleFormData(data);
    navigate("/room-selection");
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
                options={buildingsData}
                isRequired
              />
            </div>
            <button type="submit" className="nextBtn">
              Next
            </button>
          </form>
        </div>
        <div className="meeting-image">
          <img src={meetingImage} alt="Meeting" width="500px" height="auto" />
        </div>
      </div>
    </div>
  );
};;;;

export default MeetingInfo;
