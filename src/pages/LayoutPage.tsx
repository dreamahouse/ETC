import { Layout, theme } from "antd";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
const { Content } = Layout;

const LayoutPage = () => {
  const location = useLocation();
  const isPerformanceOrTeamPage =
    location.pathname.startsWith("/unit/performance") ||
    location.pathname.startsWith("/unit/team");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="container">
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: isPerformanceOrTeamPage ? 0 : 24,
              marginTop: 20,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
