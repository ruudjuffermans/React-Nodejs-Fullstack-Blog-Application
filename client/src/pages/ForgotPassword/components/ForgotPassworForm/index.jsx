import { Form } from "formik";
import withForm from "./withForm";
import InputField from "../../../../components/InputField";
import ButtonPrimary from "../../../../components/ButtonPrimary";

const ForgotPasswordForm = () => {
  return (
    <Form style={{ display: "contents" }}>
      <InputField
        name="email"
        label="forgot password"
        placeholder="Email address or phone number"
      />
      <ButtonPrimary style={{ width: "100%" }} type="submit">
        Submit
      </ButtonPrimary>
    </Form>
  );
};

export default withForm(ForgotPasswordForm);
