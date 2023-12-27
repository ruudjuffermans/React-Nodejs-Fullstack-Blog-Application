import { Form } from "formik";
import withForm from "./withForm";
import InputField from "../../../../components/InputField";
import Button from "../../../../components/Button";

const ForgotPasswordForm = () => {
  return (
    <Form style={{ display: "contents" }}>
      <InputField
        name="email"
        label="forgot password"
        placeholder="Email address or phone number"
      />
      <Button style={{ width: "100%" }} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default withForm(ForgotPasswordForm);
