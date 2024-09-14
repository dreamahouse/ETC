import { utils as XLSXUtils, write as XLSXWrite } from "xlsx";
import { saveAs } from "file-saver";
import { ColumnsType } from "antd/es/table";

const exportToExcel = <T>(
  columns: ColumnsType<T>,
  dataToExport: T[],
  name: string
) => {
  // 创建一个新的数组，包含中文标题的数据
  const dataWithChineseHeaders = dataToExport.map((item) => {
    const newItem: Record<string, unknown> = {};
    columns.forEach((col) => {
      if ("dataIndex" in col) {
        newItem[col.title as string] = item[col.dataIndex as keyof typeof item];
      }
    });
    return newItem;
  });

  const ws = XLSXUtils.json_to_sheet(dataWithChineseHeaders, {
    header: columns.map((col) => col.title as string),
  });

  const wb = XLSXUtils.book_new();
  XLSXUtils.book_append_sheet(wb, ws, "Sheet1");

  const excelBuffer = XLSXWrite(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(data, `${name}数据.xlsx`);
};
export default exportToExcel;
