"use client";

// context
import useGlobalContext from "./context";

// react
import { useEffect } from "react";

// components
import Columns from "./components/columns";
import Rows from "./components/rows";

// types
import type { Column as ColumnType } from "./types/column";
import type { Row as RowType } from "./types/row";

interface TableProps {
  columns: ColumnType[];
  rows: RowType[];
}

const Table = ({ columns, rows }: TableProps) => {
  console.log("table server side");
  const setColumns = useGlobalContext((state) => state.setColumns);

  useEffect(() => {
    setColumns(columns);
  }, [columns]);

  return (
    <table>
      <Columns columns={columns} />
      <Rows rows={rows} columns={columns} />
    </table>
  );
};

export default Table;
