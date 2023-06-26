// components
import Column from "../column";

// types
import type { Column as ColumnType } from "../../types/column";

interface ColumnProps {
  columns: ColumnType[];
}

const Columns = ({ columns }: ColumnProps) => {
  return (
    <tr>
      {columns.map((column) => {
        return <Column key={column.id} column={column} />;
      })}
    </tr>
  );
};

export default Columns;
