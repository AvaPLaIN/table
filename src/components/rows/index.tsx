//components
import Row from "../row";

// types
import type { Column as ColumnType } from "../../types/column";
import type { Row as RowType } from "../../types/row";

interface RowsProps {
  rows: RowType[];
  columns: ColumnType[];
}

const Rows = ({ rows }: RowsProps) => {
  return (
    <>
      {rows.map((row) => (
        <Row row={row} />
      ))}
    </>
  );
};

export default Rows;
