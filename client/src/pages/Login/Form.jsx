import { Form } from "formik";
import withForm from "./withForm";
import InputField from "../../components/InputField";
import ButtonPrimary from "../../components/ButtonPrimary";

const LoginForm = (x) => {
  return (
    <Form style={{ display: "contents" }}>
      <InputField type="text" name="email" label="Email" placeholder="Email" />
      <InputField
        type="password"
        label="Password"
        name="password"
        placeholder="Password"
      />
      <ButtonPrimary
        loading={x.isSubmitting}
        style={{ width: "100%" }}
        type="submit"
      >
        Login
      </ButtonPrimary>
    </Form>
  );
};

export default withForm(LoginForm);
