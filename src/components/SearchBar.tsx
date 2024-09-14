import { RedoOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
interface SearchBarProps {
  placeholder: string;
  children?: React.ReactNode;
}
const SearchBar = ({ placeholder, children }: SearchBarProps) => {
  return (
    <>
      <Form.Item name="search">
        <Input style={{ width: "240px" }} placeholder={placeholder} />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button icon={<SearchOutlined />} type="primary" htmlType="submit">
            查询
          </Button>
          <Button
            icon={<RedoOutlined />}
            htmlType="button"
            onClick={() => console.log("click")}
          >
            重置
          </Button>
        </Space>
      </Form.Item>
      {children}
    </>
  );
};
export default SearchBar;
