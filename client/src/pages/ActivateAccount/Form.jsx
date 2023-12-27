import { Form } from "formik";
import withForm from "./withForm";
import InputField from "../../components/InputField";
import ButtonPrimary from "../../components/ButtonPrimary";

const ActivateForm = ({ code, email }) => {
  return (
    <Form style={{ display: "contents" }}>
      <InputField
        name="email"
        value={email}
        label="forgot password"
        placeholder="Email address or phone number"
      />
      <InputField
        name="code"
        value={code}
        label="forgot password"
        placeholder="Email address or phone number"
      />
      <ButtonPrimary style={{ width: "100%" }} type="submit">
        Submit
      </ButtonPrimary>
    </Form>
  );
};

export default withForm(ActivateForm);
