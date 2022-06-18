// styles
import "./styles.css";

const CustomSelect = ({
  id,
  register,
  className,
  errors,
  isRequired,
  options,
  ...rest
}) => {
  return (
    <>
      <select
        id="building"
        name="building"
        className={className}
        {...register(id, { required: isRequired ? "Required" : "" })}
        {...rest}
      >
        <option value="">Please choose</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[id] && <div className="redText">{errors[id]?.message}</div>}
    </>
  );
};

export default CustomSelect;
