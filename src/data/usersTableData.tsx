import {
  Badge,
  Button,
  message,
  PopconfirmProps,
  Space,
  TableProps,
} from "antd";
import { Link } from "react-router-dom";
import PopConfirm from "../components/PopConfirm";
import SpaceDivider from "../components/SpaceDivider";
import { UsersTableDataType } from "../components/Users";
const confirm: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("激活成功");
};

const cancel: PopconfirmProps["onCancel"] = (e) => {
  console.log(e);
  message.error("取消激活");
};
const statusDic: { [key: string]: string } = {
  "1": "已激活",
  "2": "待激活",
  "3": "待录入车辆",
  "4": "待缴费",
  "5": "已过期",
  "6": "审核失败",
  "7": "签约失败",
  "8": "退款中",
  "9": "已退款",
};
export const columns: TableProps<UsersTableDataType>["columns"] = [
  {
    title: "车主名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "账号/手机号",
    dataIndex: "tel",
    key: "tel",
  },
  {
    title: "车牌号",
    dataIndex: "plate",
    key: "plate",
  },
  {
    title: "订单号",
    dataIndex: "order",
    key: "order",
  },
  {
    title: "创建日期",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "推广人",
    dataIndex: "promoter",
    key: "promoter",
  },
  {
    title: "状态",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => {
      const color =
        status === "1"
          ? "green"
          : status === "9"
          ? "cyan"
          : status === "2"
          ? "magenta"
          : status === "3"
          ? "yellow"
          : "gold";

      return (
        <Space>
          <Badge color={color} text={statusDic[status]} />
        </Space>
      );
    },
  },
  {
    title: "详情",
    dataIndex: "detaile",
    key: "detaile",
    render: (_, { status }) => {
      switch (status) {
        case "1":
          return (
            <SpaceDivider>
              <Link to={"/user/detaile/" + status}>详情</Link>
              <PopConfirm
                title="确定退款吗？"
                confirm={confirm}
                cancel={cancel}
              >
                <Button type="link" danger>
                  退款
                </Button>
              </PopConfirm>
            </SpaceDivider>
          );
        case "2":
          return (
            <SpaceDivider>
              <Link to={"/user/detaile/" + status}>详情</Link>
              <PopConfirm
                title="确定激活吗？"
                confirm={confirm}
                cancel={cancel}
              >
                <Button type="link" style={{ color: "green" }}>
                  激活
                </Button>
              </PopConfirm>
            </SpaceDivider>
          );
        default:
          return <Link to={"/user/detaile/" + status}>详情</Link>;
      }
    },
  },
];
