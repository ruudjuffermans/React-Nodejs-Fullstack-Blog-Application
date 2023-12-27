import { useField } from "formik";
import FormControl from "./FormControl";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";
import TextField from "./TextField";

const InputField = ({ className, ...props }) => {
  const [field] = useField(props);

  const handleChange = (e) => {
    field.onChange(e);
  };
  const handleBlur = (e) => {
    field.onBlur(e);
  };

  return (
    <div>
      <FormControl>
        <Label name={field.name} label={props.label} />
        <TextField
          value={field.value}
          {...props}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <ErrorMessage name={field.name} />
      </FormControl>
    </div>
  );
};

export default InputField;
