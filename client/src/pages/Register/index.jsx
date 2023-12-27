import Card from "../../components/Card";
import RegisterForm from "./Form";
import Link from "../../components/Link";
import Heading from "../../components/Heading";
import Text from "../../components/Text";

const Register = () => {
  return (
    <Card>
      <Heading tag={"h3"}>Register</Heading>

      <RegisterForm />

      <Text tag={"p"}>
        <span>
          Already have an account?{" "}
          <Link bold underline to="/login">
            Sign in
          </Link>
        </span>
      </Text>
    </Card>
  );
};

export default Register;
