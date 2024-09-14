import type { TableProps } from "antd";
import { Table } from "antd";

interface Props<T> {
  dataSource: T[];
  columns: TableProps<T>["columns"];
}

function TableData<T>({ dataSource, columns }: Props<T>) {
  return <Table bordered dataSource={dataSource} columns={columns} />;
}

export default TableData;
