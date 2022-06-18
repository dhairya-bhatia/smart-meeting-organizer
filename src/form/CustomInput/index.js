// styles
import "./styles.css";

const CustomInput = ({
  inputType,
  id,
  placeholder,
  register,
  className,
  errors,
  isRequired,
  ...rest
}) => {
  return (
    <div className="fieldContainer">
      <input
        type={inputType}
        id={id}
        name={id}
        {...register(id, { required: isRequired ? "Required" : "" })}
        placeholder={placeholder || ""}
        className={className}
        {...rest}
      />
      {errors[id] && <div className="redText">{errors[id]?.message}</div>}
    </div>
  );
};

export default CustomInput;
