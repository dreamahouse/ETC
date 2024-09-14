import {
  ApartmentOutlined,
  AppstoreOutlined,
  FormOutlined,
  InboxOutlined,
  MoneyCollectOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  WechatWorkOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "user",
    label: "用户管理",
    icon: <TeamOutlined />,
  },
  {
    key: "unit",
    label: "部门管理",
    icon: <ApartmentOutlined />,
  },
  {
    key: "program",
    label: "小程序管理",
    icon: <WechatWorkOutlined />,
  },
  {
    key: "combo",
    label: "套餐管理",
    icon: <AppstoreOutlined />,
  },
  {
    key: "material",
    label: "物料管理",
    icon: <InboxOutlined />,
  },
  {
    key: "permissions",
    label: "权限管理",
    icon: <SafetyCertificateOutlined />,
  },
  {
    key: "complaint",
    label: "投诉管理",
    icon: <FormOutlined />,
  },
  {
    key: "refund",
    label: "退款管理",
    icon: <MoneyCollectOutlined />,
  },
];
export default items;
