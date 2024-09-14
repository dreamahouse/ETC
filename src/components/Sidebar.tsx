import { Layout, Menu, theme } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import items from "../data/sidebar";
const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 获取当前路径
  const currentPath = location.pathname.split("/")[1] || "user";

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        selectedKeys={[currentPath]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
        onClick={({ key }) => navigate(key)}
      />
    </Sider>
  );
};

export default Sidebar;
