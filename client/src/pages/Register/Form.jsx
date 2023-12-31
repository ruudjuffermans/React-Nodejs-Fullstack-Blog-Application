import React from "react";
import { Form } from "formik";
import Row, { Col } from "../../components/Row";
import withForm from "./withForm";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const RegisterForm = ({ handleSubmit }) => {
  return (
    <Form style={{ display: "contents" }}>
      <Row>
        <Col>
          <InputField
            type="firstname"
            name="firstname"
            placeholder="Firstname"
            label="Firstname"
          />
        </Col>
        <Col>
          <InputField
            type="lastname"
            label="Lastname"
            name="lastname"
            placeholder="Lastname"
          />
        </Col>
      </Row>

      {/* <TextField type="password" name="password" placeholder="Password" /> */}
      <InputField
        type="password"
        label="password"
        name="password"
        placeholder="Password"
      />

      <InputField
        name="email"
        label="Email"
        placeholder="Email address or phone number"
      />

      <Button style={{ width: "100%" }} type="submit">
        Register
      </Button>
    </Form>
  );
};

export default withForm(RegisterForm);
