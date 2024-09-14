import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  FormProps,
  Image,
  Input,
  Row,
  Space,
} from "antd";
import loginBg from "../assets/login-bg@2x.png";
import loginHeading from "../assets/login-heading@2x.png";
import verificationCode from "../assets/verificationCode.png";
import "../styles/login.css";
const cardStyle: React.CSSProperties = {
  width: 980,
  height: 495,
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

const imgStyle: React.CSSProperties = {
  display: "block",
  objectFit: "cover",
};
type FieldType = {
  username?: string;
  password?: string;
  verificationCode?: string;
};
const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => {
  return (
    <Flex vertical align="center" justify="center" className="container">
      <Card
        style={cardStyle}
        styles={{ body: { padding: 0, overflow: "hidden" } }}
      >
        <Row>
          <Col span={12}>
            <Flex
              className="left-content"
              justify="center"
              align="center"
              style={{
                backgroundColor: "#4893F8",
                height: "494px",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            >
              <Image
                alt="background"
                width="415px"
                src={loginBg}
                style={imgStyle}
              />
            </Flex>
          </Col>
          <Col span={12} style={{ textAlign: "center", padding: "70px 88px" }}>
            <Space>
              <Flex vertical>
                <Image src={loginHeading} style={{ marginBottom: "35px" }} />
                <Form
                  name="login"
                  wrapperCol={{ span: 24 }}
                  style={{ maxWidth: 600 }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item<FieldType>
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input placeholder="用户名" size="large" />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password placeholder="密码" size="large" />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="verificationCode"
                    rules={[
                      {
                        required: true,
                        message: "Please input your verificationCode!",
                      },
                    ]}
                  >
                    <Row>
                      <Col span={12}>
                        <Input size="large" />
                      </Col>
                      <Col
                        span={12}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={verificationCode}
                          width={80}
                          style={{ marginLeft: "5px" }}
                        />
                        <Button type="text" style={{ color: "#999" }}>
                          换一张
                        </Button>
                      </Col>
                    </Row>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      style={{
                        height: "40px",
                        marginTop: "20px",
                      }}
                    >
                      登录
                    </Button>
                    <Button
                      type="text"
                      style={{
                        color: "#999",
                        marginTop: "10px",
                      }}
                    >
                      忘记密码
                    </Button>
                  </Form.Item>
                </Form>
              </Flex>
            </Space>
          </Col>
        </Row>
      </Card>
    </Flex>
  );
};

export default Login;
