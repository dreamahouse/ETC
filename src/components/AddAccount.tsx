import { Form, Modal, Radio, Input, Button, Space, FormProps } from "antd";
import { useState } from "react";
export interface FieldType {
  createType: "department" | "employee";
  name: string;
  adminName: string;
  phone: string;
  verificationCode: string;
}
interface Props {
  visible: boolean;
  onClose: () => void;
  onSubmit: (values: FormProps<FieldType>) => void;
}
const AddAccount = ({ visible, onClose, onSubmit }: Props) => {
  const [form] = Form.useForm();
  const [createType, setCreateType] = useState<"department" | "employee">(
    "department"
  );

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
    });
  };
  return (
    <Modal
      title="新建"
      open={visible}
      onCancel={onClose}
      onOk={handleSubmit}
      footer={null}
      styles={{ body: { padding: "20px 40px" } }}
    >
      <Form
        form={form}
        layout="horizontal"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ createType: "department" }}
        labelAlign="left"
      >
        <Form.Item name="createType" label="新建类型">
          <Radio.Group
            onChange={(e) => setCreateType(e.target.value)}
            value={createType}
          >
            <Radio value="department">新建部门</Radio>
            <Radio value="employee">新建员工</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="name" label="部门名称" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="adminName"
          label="管理员姓名"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="手机号"
          rules={[
            { required: true },
            { pattern: /^1\d{10}$/, message: "请输入正确的手机号" },
          ]}
        >
          <Input
            maxLength={11}
            addonAfter={
              <Button type="link" size="small">
                获取验证码
              </Button>
            }
          />
        </Form.Item>

        <Form.Item
          name="verificationCode"
          label="验证码"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Space style={{ float: "right" }}>
            <Button onClick={onClose}>取消</Button>
            <Button type="primary" onClick={handleSubmit}>
              新建
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AddAccount;
