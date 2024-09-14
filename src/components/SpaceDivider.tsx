import { Divider, Space } from "antd";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const SpaceDivider = ({ children }: Props) => {
  return <Space split={<Divider type="vertical" />}>{children}</Space>;
};

export default SpaceDivider;
