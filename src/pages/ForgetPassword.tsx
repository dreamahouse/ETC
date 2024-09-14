import type { FormProps } from "antd";
import { Button, Card, Col, Flex, Form, Image, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import title from "../assets/change-password-title@2x.png";
import { useEffect, useState } from "react";
import "../styles/forget-password.css";
type FieldType = {
  verificationcode?: string;
  password?: string;
  newpassword?: string;
  telnumber?: string;
};
const ForgetPassword = () => {
  const [submittable, setSubmittable] = useState<boolean>(false);
  // const [messageApi] = message.useMessage();
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  useEffect(() => {
    //校验联动button是否可点击
    form
      .validateFields({ validateOnly: true })
      .then(() => {
        console.log(111);

        setSubmittable(true);
      })
      .catch(() => setSubmittable(false));

    // messageApi.open({
    //   type: "success",
    //   content: "密码修改成功",
    // });
  }, [form, values]);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Flex vertical align="center" justify="center" className="container">
      <Flex
        vertical
        align="center"
        justify="center"
        style={{ marginBottom: "30px" }}
      >
        <Image src={title} style={{ width: "177px", marginBottom: "10px" }} />
        <Title
          level={5}
          style={{
            color: "#606266",
            fontWeight: "normal",
          }}
        >
          首次登录，需要修改您的密码
        </Title>
      </Flex>
      <Card
        styles={{ body: { overflow: "hidden" } }}
        style={{
          width: "634px",
          height: "352px",
          textAlign: "center",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Form
          name="changepassword"
          form={form}
          size="large"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ width: 440, margin: "auto" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="手机号码"
            name="telnumber"
            style={{
              textAlign: "left",
            }}
          >
            <Row align="middle">
              <Col>
                <span style={{ fontSize: "16px" }}>132****1234</span>
              </Col>
              <Col offset={9}>
                <Button>获取验证码</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item<FieldType>
            label="请输入验证码"
            name="verificationcode"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="请输入新密码"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<FieldType>
            label="请再次确认"
            name="newpassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              type="primary"
              htmlType="submit"
              block
              disabled={!submittable}
            >
              确定
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};

export default ForgetPassword;
