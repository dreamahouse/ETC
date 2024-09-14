import DescriptionsList from "./DescriptionsList";
import { basicItems, carItems } from "../data/UsersDetailData";
import { useParams } from "react-router-dom";
import { Alert, AlertProps } from "antd";
const UsersDoneDetaile = () => {
  const { status } = useParams();
  console.log(status);
  let message, type: AlertProps["type"];
  switch (status) {
    case "1":
      message = "已完成";
      type = "success";
      break;
    case "2":
      message = "等待用户激活中";
      break;
    case "3":
      message = "等待录入车辆";
      type = "info";
      break;
    case "4":
      message = "等待用户缴费";
      break;
    case "8":
      message = "退款中/已退款";
      break;
    default:
      message = "订单异常";
      type = "error";
  }
  return (
    <>
      <Alert
        banner
        message={message}
        type={type}
        showIcon
        style={{ marginBottom: "15px" }}
      />
      <DescriptionsList title="基本信息" items={basicItems} />
      <DescriptionsList title="车辆信息" items={carItems} />
    </>
  );
};

export default UsersDoneDetaile;
