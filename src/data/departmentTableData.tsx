import { Button, Space } from "antd";
import { ColumnType } from "antd/es/table";
import { DepartmentDataType } from "../components/Department";
import { Link } from "react-router-dom";
import PopConfirm from "../components/PopConfirm";
const togglePermission = (userId: string) => {
  console.log(userId);
};
export const columns: ColumnType<DepartmentDataType>[] = [
  {
    title: "部门名称",
    dataIndex: "departmentName",
    key: "departmentName",
  },
  {
    title: "管理员",
    dataIndex: "manager",
    key: "manager",
  },
  {
    title: "账号/手机号",
    dataIndex: "account",
    key: "account",
  },
  {
    title: "身份证号",
    dataIndex: "idNumber",
    key: "idNumber",
  },
  {
    title: "上级部门",
    dataIndex: "parentDepartment",
    key: "parentDepartment",
  },
  {
    title: "操作",
    key: "actions",
    render: (_, record: DepartmentDataType) => (
      <Space>
        <Link to={`/unit/performance/${record.userId}`}>业绩详情</Link>
        <Link to={`/unit/team/${record.userId}`}>团队详情</Link>
        <PopConfirm
          title={
            record.hasPermission ? "确定要关闭权限吗？" : "确定要开启权限吗？"
          }
          description={
            record.hasPermission
              ? "关闭后，团队下的所有人将不能登录展业端进行展业"
              : ""
          }
          confirm={() => togglePermission(record.userId)}
          cancel={() => console.log("取消")}
        >
          <Button type="text" danger style={{ padding: 0 }}>
            {record.hasPermission ? "关闭权限" : "开启权限"}
          </Button>
        </PopConfirm>
      </Space>
    ),
  },
];
