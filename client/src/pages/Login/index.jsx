import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Link from "../../components/Link";
import Text from "../../components/Text";
import LoginForm from "./Form";

const Login = () => {
  return (
    <Card>
      <Heading tag={"h3"}>Login</Heading>
      <LoginForm />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text>

          <Link underline bold to="/forgot-password">
            Forgot your password?
          </Link>
        </Text>

        <Text>

          Not a member yet?{" "}
          <Link underline bold to="/register">
            Register Now
          </Link>
        </Text>
      </div>
    </Card>
  );
};

export default Login;
