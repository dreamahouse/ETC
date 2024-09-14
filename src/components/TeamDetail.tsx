import { ExportOutlined, PlusOutlined, SwapOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Flex,
  FormProps,
  Space,
  Table,
  Tabs,
  Typography,
} from "antd";
import { useState } from "react";
import styled from "styled-components";
import person from "../assets/person.png";
import {
  DataType,
  Employee,
  TableDataType,
  useDepartmentColumns,
  useEmployeeColumns,
} from "../data/teamTableData";
import exportToExcel from "../utils/download";
import AddAccount, { FieldType } from "./AddAccount";
const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  height: 100%;
  border-radius: 8px;
`;
const { Title, Text } = Typography;

const TeamDetail = () => {
  const [activeTab, setActiveTab] = useState("1");

  const departmentColumns = useDepartmentColumns();
  const employeeColumns = useEmployeeColumns();
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSubmit = (values: FormProps<FieldType>) => {
    console.log(values);
    setModalVisible(false);
  };
  const departmentData: DataType[] = [
    {
      key: "1",
      userId: "001",
      name: "销售部",
      manager: "张三",
      account: "zhangsan@example.com",
      idNumber: "110101199001011234",
      hasPermission: true,
    },
    {
      key: "2",
      userId: "002",
      name: "市场部",
      manager: "李四",
      account: "lisi@example.com",
      idNumber: "310101199203033456",
      hasPermission: false,
    },
  ];

  const employeeData: Employee[] = [
    {
      key: "1",
      userId: "001",
      name: "张三",
      account: "zhangsan@example.com",
      idNumber: "110101199001011234",
      hasPermission: true,
    },
    {
      key: "2",
      userId: "002",
      name: "李四",
      account: "lisi@example.com",
      idNumber: "310101199203033456",
      hasPermission: false,
    },
  ];

  const items = [
    {
      key: "1",
      label: "部门",
    },
    {
      key: "2",
      label: "员工",
    },
  ];

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };
  const dataToExport = activeTab === "1" ? departmentData : employeeData;
  const columns = activeTab === "1" ? departmentColumns : employeeColumns;
  const name = activeTab === "1" ? "部门" : "员工";

  return (
    <Flex
      vertical
      style={{
        backgroundColor: "#f5f5f5",
        width: "100%",
        height: "100%",
      }}
    >
      <Card
        style={{
          borderRadius: "8px",
          marginBottom: "20px",
          backgroundColor: "#fff",
          padding: 20,
        }}
        styles={{ body: { padding: 0 } }}
      >
        <Space>
          <Avatar size={64} src={person} />
          <div>
            <Title level={4} style={{ margin: 0 }}>
              京海-高启强-管理部
            </Title>
            <Space size="large">
              <Text>管理员:高启强</Text>
              <Text>电话号码:13288889999</Text>
              <Text>身份证号:610121189912130044</Text>
              <Text>所属部门:京海-高启强-管理部</Text>
            </Space>
          </div>
        </Space>
        <Button
          type="primary"
          danger
          icon={<SwapOutlined />}
          style={{ float: "right", marginTop: "18px" }}
        >
          迁移
        </Button>
      </Card>
      <ContentWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Tabs defaultActiveKey="1" items={items} onChange={handleTabChange} />
          <Space>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setModalVisible(true)}
            >
              新建
            </Button>
            <Button
              icon={<ExportOutlined />}
              onClick={() =>
                exportToExcel<TableDataType>(columns, dataToExport, name)
              }
            >
              导出
            </Button>
          </Space>
        </div>

        <Table
          bordered
          columns={activeTab === "1" ? departmentColumns : employeeColumns}
          dataSource={activeTab === "1" ? departmentData : employeeData}
        />
      </ContentWrapper>
      <AddAccount
        visible={modalVisible}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </Flex>
  );
};

export default TeamDetail;
