import Tree, { DataNode } from "antd/es/tree";

interface Employee {
  id: string;
  name: string;
  region: string;
  department: string;
  subordinates?: Employee[];
}
const OrganizeTree = () => {
  const organizationData: Employee[] = [
    {
      id: "1",
      name: "张三",
      region: "北京",
      department: "总公司",
      subordinates: [
        {
          id: "2",
          name: "李四",
          region: "上海",
          department: "研发部",
          subordinates: [
            { id: "3", name: "王五", region: "上海", department: "前端组" },
            { id: "4", name: "赵六", region: "上海", department: "后端组" },
          ],
        },
        {
          id: "5",
          name: "钱七",
          region: "广州",
          department: "市场部",
          subordinates: [
            { id: "6", name: "孙八", region: "广州", department: "国内市场组" },
            { id: "7", name: "周九", region: "深圳", department: "海外市场组" },
          ],
        },
      ],
    },
  ];
  const convertToTreeData = (employees: Employee[]): DataNode[] => {
    return employees.map((employee) => ({
      key: employee.id,
      title: `${employee.region} - ${employee.name} - ${employee.department}`,
      children: employee.subordinates
        ? convertToTreeData(employee.subordinates)
        : undefined,
    }));
  };
  return (
    <>
      <Tree
        style={{ width: "200px", borderRadius: "10px" }}
        treeData={convertToTreeData(organizationData)}
        defaultExpandAll
      />
    </>
  );
};
export default OrganizeTree;
