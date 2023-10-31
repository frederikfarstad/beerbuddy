import { Form, Input, Button } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import styles from "./LoginFormMobile.module.css";

type FieldType = {
  username?: string;
  password?: string;
  repeatPassword?: string;
  email?: string;
};

interface LoginFormMobileProps {
  showMessage: (string: {
    username: string;
    password: string;
    repeatPassword: string;
    email: string;
  }) => void;
  onFinishFailed: (errorInfo: ValidateErrorEntity) => void;
}

const LoginFormMobile = ({
  showMessage,
  onFinishFailed,
}: LoginFormMobileProps) => {
  return (
    <section>
      <h1 className={styles.loginFormHeaderMobile}>Register</h1>
      <Form
        name="basic"
        className={styles.loginFormMobile}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={showMessage}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          className={styles.loginFormUsername}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className={styles.loginFormPasswordContainer} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Repeat your password"
          name="repeatPassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className={styles.loginFormPasswordContainer} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.loginButton}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default LoginFormMobile;
