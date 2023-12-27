import { withFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../service/axios";

const validationSchema = Yup.object({
  email: Yup.string().required("Email address is required."),
  password: Yup.string()
    .required("Required field password")
    .test({
      test: (value) => {
        let errors = [];

        if (!/^(?=.{8,})/.test(value)) {
          errors.push("Must Contain 8 Characters");
        }

        if (!/^(?=.*[!@#\$%\^&\*])/.test(value)) {
          errors.push("One Special Case Character");
        }

        if (!/^(?=.*[0-9])/.test(value)) {
          errors.push("One Number");
        }

        if (!/^(?=.*[a-z])/.test(value)) {
          errors.push("One Lowercase");
        }

        if (!/^(?=.*[A-Z])/.test(value)) {
          errors.push("One Uppercase");
        }

        if (errors.length > 0) {
          throw new Yup.ValidationError({
            errors: errors,
            inner: true,
            path: "password",
            message: errors,
            value: value,
            name: "ValidationError",
          });
        }

        return true;
      },
    }),
});

const withForm = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema,
  validate: false,
  validateOnChange: true,
  handleSubmit: (values, rest) => {
    axiosInstance
      .post("/login", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(values);
  },
});

export default withForm;
