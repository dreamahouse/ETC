import { Avatar, Space, Statistic, Typography } from "antd";
import person from "@/assets/person.png";
import ColorCard from "./ColorCard";
const { Title } = Typography;
const PerformanceDataPanel = () => {
  return (
    <Space
      size={60}
      style={{
        height: "110px",
        width: "100%",
        padding: "10px 20px",
        backgroundColor: "#fff",
        boxSizing: "content-box",
        borderRadius: "10px",
      }}
    >
      <Space style={{ alignItems: "center" }}>
        <Avatar size={64} src={person} />
        <Title level={4} style={{ margin: 0 }}>
          张三
        </Title>
      </Space>
      <Space size={20}>
        <ColorCard>
          <Statistic
            title="300权益包"
            value={1265}
            valueStyle={{ fontSize: "24px" }}
          />
        </ColorCard>
        <ColorCard>
          <Statistic
            title="500权益包"
            value={1288}
            valueStyle={{ fontSize: "24px" }}
          />
        </ColorCard>
      </Space>
    </Space>
  );
};
export default PerformanceDataPanel;
