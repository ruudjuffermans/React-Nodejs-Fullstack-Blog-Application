import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Link from "../../components/Link";
import Text from "../../components/Text";

import LoginForm from "./components/ForgotPassworForm";

const ForgotPassword = () => {
  return (
    <Card>
      <Heading tag={"h3"}>Forgot Password</Heading>
      <LoginForm />
      <Text small tag={"p"}>
        <Link bold underline to="/login">
          Return to Login
        </Link>
      </Text>
    </Card>
  );
};

export default ForgotPassword;
