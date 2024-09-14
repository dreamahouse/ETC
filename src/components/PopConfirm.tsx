import { Popconfirm } from "antd";
import { ReactNode } from "react";
interface Props {
  title: string;
  description?: string;
  confirm: () => void;
  cancel: () => void;
  children: ReactNode;
}
const PopConfirm = ({
  title,
  confirm,
  cancel,
  children,
  description,
}: Props) => {
  return (
    <Popconfirm
      title={title}
      description={description || ""}
      onConfirm={confirm}
      onCancel={cancel}
      okText="确定"
      cancelText="取消"
    >
      {children}
    </Popconfirm>
  );
};

export default PopConfirm;
