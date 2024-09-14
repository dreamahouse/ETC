import { Image, Space } from "antd";
import ID from "../assets/IDCard.png";
export const basicItems = [
  {
    key: "1",
    label: "车主姓名",
    children: "高启强",
  },
  {
    key: "2",
    label: "联系方式",
    children: "13299998888",
  },
  {
    key: "3",
    label: "身份证号",
    children: "610121189812030088",
  },
  {
    key: "4",
    label: "车牌号码",
    children: "陕A88888",
  },
  {
    key: "5",
    label: "地址",
    children: "陕西省哥谭市",
  },
  {
    key: "6",
    label: "证件照",
    children: (
      <Space>
        <Image src={ID} />
        <Image src={ID} />
      </Space>
    ),
  },
];
export const carItems = [
  {
    key: "1",
    label: "车辆所有人",
    children: "高启强",
  },
  {
    key: "2",
    label: "车辆类型",
    children: "轿车",
  },
  {
    key: "3",
    label: "品牌型号",
    children: "宝马X5",
  },
  {
    key: "4",
    label: "核定载人数",
    children: "7",
  },
  {
    key: "5",
    label: "使用资质",
    children: "客运",
  },
  {
    key: "6",
    label: "车辆识别代码",
    children: "LVH81678HDYTSHNSAJ",
  },
  {
    key: "7",
    label: "总质量(吨)",
    children: "10",
  },
  {
    key: "8",
    label: "整备质量(吨)",
    children: "15",
  },
  {
    key: "9",
    label: "发动机号",
    children: "HUG78364673737",
  },
  {
    key: "10",
    label: "注册日期",
    children: "2023-10-10",
  },
  {
    key: "11",
    label: "发证日期",
    children: "2023-10-10",
  },
  {
    key: "12",
    label: "外廓尺寸",
    children: "2300-2300-2300",
  },
  {
    key: "13",
    label: "证件照",
    children: (
      <Space>
        <Image src={ID} />
        <Image src={ID} />
      </Space>
    ),
  },
];
