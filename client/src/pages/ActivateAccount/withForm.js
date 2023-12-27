import { withFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().required([
    "Email address is required.",
    "Email address is required.",
  ]),
});

const withForm = withFormik({
  mapPropsToValues: () => ({ email: undefined, code: undefined }),
  validationSchema,
  validateOnChange: false,
  handleSubmit: (values, rest) => {
    console.log("ssss");
    alert(JSON.stringify(values, null, 2));
    rest.setSubmitting(false);
    rest.setFieldError("search", "hey");
  },
});

export default withForm;
