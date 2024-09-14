import { Card } from "antd";
const ColorCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card
      style={{
        width: "128px",
        padding: "10px 24px",
        background: "linear-gradient(to bottom, #E8FFF4, #FAFDFB)",
      }}
      styles={{ body: { padding: 0 } }}
    >
      {children}
    </Card>
  );
};
export default ColorCard;
