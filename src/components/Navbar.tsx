import { DownOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Col,
  Dropdown,
  Flex,
  Layout,
  MenuProps,
  Row,
  Space,
} from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import avatar from "../assets/avatar.png";
import navbarlogo from "../assets/navbar-logo.png";
import "../styles/navbar.css";

const { Header } = Layout;

const items: MenuProps["items"] = [
  { label: "个人中心", key: 1 },
  { label: "个人中心", key: 2 },
];

const Navbar = () => {
  const location = useLocation();

  const breadcrumbNameMap: Record<string, string> = {
    "/": "首页",
    "/user": "用户管理",
    "/user/detaile": "用户详情",
    "/unit": "部门管理",
    "/unit/performance": "业绩详情",
    "/unit/team": "团队详情",
    "/program": "小程序管理",
    "/combo": "套餐管理",
    "/material": "物料管理",
    "/permissions": "权限管理",
    "/complaint": "投诉管理",
    "/refund": "退款管理",
  };

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.reduce((acc, _, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    let breadcrumbName = breadcrumbNameMap[url];

    // 处理子类页面
    if (!breadcrumbName) {
      const parentUrl = `/${pathSnippets.slice(0, index).join("/")}`;
      if (breadcrumbNameMap[parentUrl]) {
        // 如果是最后一个路径段，将其作为父级的子类
        if (index === pathSnippets.length - 1) {
          const parentName = breadcrumbNameMap[parentUrl];
          const childName = breadcrumbNameMap[url] || pathSnippets[index];
          breadcrumbName = `${parentName} - ${childName}`;
          // 更新最后一个面包屑项，而不是添加新项
          if (acc.length > 0) {
            acc[acc.length - 1] = {
              key: url,
              title: breadcrumbName,
            };
            return acc;
          }
        }
      }
    }

    // 检查是否为当前路由
    const isCurrentRoute = index === pathSnippets.length - 1;

    if (breadcrumbName) {
      const existingIndex = acc.findIndex(
        (item) =>
          React.isValidElement(item.title) &&
          item.title.props.children === breadcrumbName
      );

      if (existingIndex !== -1) {
        acc.splice(existingIndex, 1);
      }

      acc.push({
        key: url,
        title: isCurrentRoute ? (
          breadcrumbName
        ) : (
          <Link to={url}>{breadcrumbName}</Link>
        ),
      });
    }

    return acc;
  }, [] as { key: string; title: React.ReactNode }[]);

  // 更新首页面包屑项
  const breadcrumbItems = [
    {
      key: "home",
      title: location.pathname === "/" ? "首页" : <Link to="/">首页</Link>,
    },
    ...extraBreadcrumbItems,
  ];

  return (
    <Header className="header">
      <Flex align="center" justify="space-between" style={{ width: "100%" }}>
        <Row justify="center" align="middle" className="navbar-left">
          <Col
            style={{ width: "180px", display: "flex", alignItems: "center" }}
          >
            <img src={navbarlogo} width={116} alt="Logo" />
          </Col>
          <Col>
            <Breadcrumb separator=">" items={breadcrumbItems} />
          </Col>
        </Row>
        <div className="navbar-right">
          <Row align="middle" gutter={10}>
            <Flex align="center">
              <Col style={{ display: "flex" }}>
                <img src={avatar} width={40} className="avatar" alt="Avatar" />
              </Col>
              <Col>
                <Dropdown menu={{ items }}>
                  <Space>
                    章北海
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </Col>
            </Flex>
          </Row>
        </div>
      </Flex>
    </Header>
  );
};

export default Navbar;
