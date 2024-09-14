import { Descriptions, DescriptionsProps } from "antd";
interface Props {
  title: string;
  items: DescriptionsProps["items"];
}
const DescriptionsList = ({ title, items }: Props) => {
  return (
    <Descriptions
      title={title}
      items={items}
      bordered
      style={{ marginBottom: "15px" }}
    />
  );
};

export default DescriptionsList;
