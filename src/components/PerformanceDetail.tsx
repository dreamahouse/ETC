import styled from "styled-components";
import OrganizeTree from "./OrganizeTree";
import PerformanceDataPanel from "./PerformanceDataPanel";
import PerformanceNavbar from "./PerformanceNavbar";
import TableData from "./TableData";
import { columns, DataType } from "../data/performanceTableData";
const PerformanceWrapper = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  display: flex;
`;
const OrganizeTreeWrapper = styled.div`
  width: 240px;
  min-width: 240px;
  flex-shrink: 0;
  height: calc(100vh - 100px);
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
`;
const RightWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  padding-left: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;
const TableWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  width: 100%;
  height: calc(100% - 150px);
`;

const dataSource: DataType[] = [
  {
    key: "1",
    ownerName: "张三",
    plateNumber: "京A12345",
    contactInfo: "13800138000",
    orderNumber: "ORD20230001",
    obuCode: "OBU001",
    packageType: "年卡",
    salesmanName: "李四",
    supervisor: "王五",
    department: "销售部",
    processingTime: "2023-05-01 09:00:00",
    activationTime: "2023-05-02 10:00:00",
  },
  {
    key: "2",
    ownerName: "李明",
    plateNumber: "沪B67890",
    contactInfo: "13900139000",
    orderNumber: "ORD20230002",
    obuCode: "OBU002",
    packageType: "月卡",
    salesmanName: "赵六",
    supervisor: "钱七",
    department: "客户服务部",
    processingTime: "2023-05-03 14:30:00",
    activationTime: "2023-05-04 09:15:00",
  },
  {
    key: "3",
    ownerName: "陈红",
    plateNumber: "粤C54321",
    contactInfo: "13700137000",
    orderNumber: "ORD20230003",
    obuCode: "OBU003",
    packageType: "季卡",
    salesmanName: "孙八",
    supervisor: "周九",
    department: "市场部",
    processingTime: "2023-05-05 11:45:00",
    activationTime: "2023-05-06 13:30:00",
  },
];
const PerformanceDetail = () => {
  return (
    <>
      <PerformanceWrapper>
        <OrganizeTreeWrapper>
          <OrganizeTree />
        </OrganizeTreeWrapper>
        <RightWrapper>
          <PerformanceDataPanel />
          <TableWrapper>
            <PerformanceNavbar dataToExport={dataSource} />
            <TableData dataSource={dataSource} columns={columns} />
          </TableWrapper>
        </RightWrapper>
      </PerformanceWrapper>
    </>
  );
};
export default PerformanceDetail;
