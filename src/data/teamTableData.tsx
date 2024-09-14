import { Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
export interface DataType {
  key: string;
  userId: string;
  name: string;
  manager: string;
  account: string;
  idNumber: string;
  hasPermission: boolean;
}
export interface Employee {
  key: string;
  userId: string;
  name: string;
  account: string;
  idNumber: string;
  hasPermission: boolean;
}
export type TableDataType = DataType | Employee;

export const useDepartmentColumns = (): ColumnsType<TableDataType> => {
  return [
    { title: "部门名称", dataIndex: "name", key: "name" },
    { title: "管理员", dataIndex: "manager", key: "manager" },
    { title: "账号", dataIndex: "account", key: "account" },
    { title: "身份证号", dataIndex: "idNumber", key: "idNumber" },
    {
      title: "操作",
      key: "action",
      render: (_, record: TableDataType) => (
        <Space size="middle">
          <Link to={`/unit/performance/${record.userId}`}>业绩详情</Link>
          <Link to={`/unit/team/${record.userId}`}>团队详情</Link>
          <Button type="text" danger style={{ padding: 0 }}>
            {record.hasPermission ? "关闭权限" : "开启权限"}
          </Button>
        </Space>
      ),
    },
  ];
};

export const useEmployeeColumns = (): ColumnsType<TableDataType> => {
  return [
    { title: "姓名", dataIndex: "name", key: "name" },
    { title: "账号", dataIndex: "account", key: "account" },
    { title: "身份证号", dataIndex: "idNumber", key: "idNumber" },
    {
      title: "操作",
      key: "action",
      render: (_, record: TableDataType) => (
        <Space size="middle">
          <Link to={`/unit/performance/${record.userId}`}>业绩详情</Link>
          <Button type="text" danger style={{ padding: 0 }}>
            {record.hasPermission ? "关闭权限" : "开启权限"}
          </Button>
        </Space>
      ),
    },
  ];
};
