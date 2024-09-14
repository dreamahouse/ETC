import { ExportOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Space } from "antd";
import locale from "antd/es/date-picker/locale/zh_CN";
import { columns, DataType } from "../data/performanceTableData";
import exportToExcel from "../utils/download";
const { RangePicker } = DatePicker;

const PerformanceNavbar = ({ dataToExport }: { dataToExport: DataType[] }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="inline"
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      <Form.Item name="dateRange" label="创建日期">
        <RangePicker locale={locale} />
      </Form.Item>
      <Form.Item name="search" style={{ marginLeft: "auto" }}>
        <Input placeholder="搜索..." style={{ width: 200 }} />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            查询
          </Button>
          <Button
            icon={<ExportOutlined />}
            onClick={() => exportToExcel(columns, dataToExport, "业绩详情")}
          >
            导出
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default PerformanceNavbar;
