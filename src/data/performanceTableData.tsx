import { ColumnsType } from "antd/es/table";

export interface DataType {
  key: string;
  ownerName: string;
  plateNumber: string;
  contactInfo: string;
  orderNumber: string;
  obuCode: string;
  packageType: string;
  salesmanName: string;
  supervisor: string;
  department: string;
  processingTime: string;
  activationTime: string;
}

export const columns: ColumnsType<DataType> = [
  { title: "车主名称", dataIndex: "ownerName", key: "ownerName" },
  { title: "车牌号", dataIndex: "plateNumber", key: "plateNumber" },
  { title: "车主联系方式", dataIndex: "contactInfo", key: "contactInfo" },
  { title: "订单号", dataIndex: "orderNumber", key: "orderNumber" },
  { title: "OBU编码", dataIndex: "obuCode", key: "obuCode" },
  { title: "套餐类型", dataIndex: "packageType", key: "packageType" },
  { title: "业务员姓名", dataIndex: "salesmanName", key: "salesmanName" },
  { title: "上级", dataIndex: "supervisor", key: "supervisor" },
  { title: "上级部门", dataIndex: "department", key: "department" },
  { title: "办理时间", dataIndex: "processingTime", key: "processingTime" },
  { title: "激活时间", dataIndex: "activationTime", key: "activationTime" },
];
