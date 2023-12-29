import { withFormik } from "formik";
import * as Yup from "yup";
import axiosInstance from "../../service/axios";

const withForm = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    lastname: "",
    firstname: "",
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Is required"),
    firstname: Yup.string().required("Is required"),
    lastname: Yup.string().required("Is required"),
  }),

  handleSubmit: (values, rest) => {
    axiosInstance
      .post("/register", values)
      .then((response) => {
        // Handle success
        console.log(response.data.message);
      })
      .catch((error) => {
        // Handle error
      });
    console.log(values);
  },
});

export default withForm;
