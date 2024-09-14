import { ExportOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Form, FormProps, Space } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { columns } from "../data/departmentTableData";
import SearchBar from "./SearchBar";
import TableData from "./TableData";
import exportToExcel from "../utils/download";
import AddAccount, { FieldType } from "./AddAccount";
import { useState } from "react";
export interface DepartmentDataType {
  key: string;
  userId: string;
  departmentName: string;
  manager: string;
  account: string;
  idNumber: string;
  parentDepartment: string;
  hasPermission: boolean;
}
const departmentData: DepartmentDataType[] = [
  {
    key: "1",
    userId: "1",
    departmentName: "销售部",
    manager: "张三",
    account: "13800138000",
    idNumber: "110101199001011234",
    parentDepartment: "营销中心",
    hasPermission: false,
  },
  {
    key: "2",
    userId: "2",
    departmentName: "销售部",
    manager: "张三",
    account: "13800138000",
    idNumber: "110101199001011234",
    parentDepartment: "营销中心",
    hasPermission: true,
  },
];
const Department = () => {
  const { pathname } = useLocation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSubmit = (values: FormProps<FieldType>) => {
    console.log(values);
    setModalVisible(false);
  };
  if (pathname.includes("team") || pathname.includes("performance")) {
    return <Outlet />;
  }
  return (
    <>
      <Form layout="inline">
        <Flex
          justify="end"
          align="center"
          style={{ width: "100%", marginBottom: "20px" }}
        >
          <SearchBar placeholder="搜索部门名称">
            <Form.Item>
              <Space>
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => setModalVisible(true)}
                >
                  新建
                </Button>
                <Button
                  icon={<ExportOutlined />}
                  onClick={() =>
                    exportToExcel<DepartmentDataType>(
                      columns,
                      departmentData,
                      "部门管理"
                    )
                  }
                >
                  导出
                </Button>
              </Space>
            </Form.Item>
          </SearchBar>
        </Flex>
      </Form>
      <TableData dataSource={departmentData} columns={columns} />
      <AddAccount
        visible={modalVisible}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Department;
