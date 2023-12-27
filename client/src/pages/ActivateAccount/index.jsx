import Button from "../../components/Button";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import axiosInstance from "../../service/axios";

import { useEffect, useState } from "react";

const ActivateAccount = () => {
  const [code, setCode] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setEmail(params.get("email"));
    setCode(params.get("code"));
  }, []);

  const activateAccount = () => {
    axiosInstance
      .post("/activate-account", {
        email: email,
        code: code,
      })
      .then((response) => {
        // Handle success
        console.log(response);
      })
      .catch((error) => {
        // Handle error
      });
  };
  return (
    <Card>
      <Heading tag={"h3"}>Activate Account</Heading>
      <Button onClick={activateAccount}>activate</Button>
    </Card>
  );
};

export default ActivateAccount;
