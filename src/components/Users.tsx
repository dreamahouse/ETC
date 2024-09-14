import { Outlet, useLocation } from "react-router-dom";
import { columns } from "../data/usersTableData.tsx";
import TableData from "./TableData";
import UsersNavbar from "./UsersNavbar";
export interface UsersTableDataType {
  key: string;
  name: string;
  tel: string;
  plate: string;
  order: number;
  date: string;
  promoter: string;
  status: string;
}
const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    tel: "13288889999",
    plate: "陕A88888",
    order: 1211222,
    date: "2024-08-18",
    promoter: "赵四",
    status: "1",
  },
  {
    key: "2",
    name: "杨千嬅",
    tel: "13288889999",
    plate: "陕A88888",
    order: 1211222,
    date: "2024-08-18",
    promoter: "赵四",
    status: "8",
  },
  {
    key: "3",
    name: "吴彦祖",
    tel: "13288889999",
    plate: "陕A88888",
    order: 1211222,
    date: "2024-08-18",
    promoter: "赵四",
    status: "9",
  },
  {
    key: "4",
    name: "吴彦祖",
    tel: "13288889999",
    plate: "陕A88888",
    order: 1211222,
    date: "2024-08-18",
    promoter: "赵四",
    status: "2",
  },
];
const Users = () => {
  const { pathname } = useLocation();
  if (pathname.includes("detaile")) {
    return <Outlet />;
  }
  return (
    <>
      <UsersNavbar />
      <TableData<UsersTableDataType>
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
};

export default Users;
