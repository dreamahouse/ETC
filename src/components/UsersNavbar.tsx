import { ConfigProvider, DatePicker, Flex, Form, Select } from "antd";
import locale from "antd/locale/zh_CN";
import SearchBar from "./SearchBar";
const { RangePicker } = DatePicker;
const selectItems = [
  { value: "1", label: "已激活" },
  { value: "2", label: "待激活" },
  { value: "3", label: "待录入车辆" },
  { value: "4", label: "待缴费" },
  { value: "5", label: "已过期" },
  { value: "6", label: "审核失败" },
  { value: "7", label: "签约失败" },
  { value: "8", label: "退款中" },
  { value: "9", label: "已退款" },
];
const UsersNavbar = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Form layout="inline" form={form} style={{ marginBottom: "15px" }}>
        <Flex justify="space-between" align="center" style={{ width: "100%" }}>
          <Flex>
            <Form.Item name="status" label="状态">
              <Select
                placeholder="请选择审核状态"
                style={{ width: 140 }}
                options={selectItems}
              />
            </Form.Item>
            <Form.Item name="date" label="创建日期">
              <ConfigProvider locale={locale}>
                <RangePicker />
              </ConfigProvider>
            </Form.Item>
          </Flex>
          <Flex>
            <SearchBar placeholder="搜索用户手机号、姓名、车牌号" />
          </Flex>
        </Flex>
      </Form>
    </>
  );
};

export default UsersNavbar;
