import { Card, Space, Avatar, Typography } from "antd";
import person from "../assets/person.png";
const TeamDetailCard = () => {
  return (
    <Card>
      <Space>
        <Avatar src={person} />
        <Typography>
          <Typography.Title level={5}>姓名</Typography.Title>
          <Typography.Text></Typography.Text>
        </Typography>
      </Space>
    </Card>
  );
};
export default TeamDetailCard;
