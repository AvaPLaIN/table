// components
import Button from "./button";

// types
import type { Column as ColumnType } from "../../types/column";

interface ColumnProps {
  column: ColumnType;
}

const Column = ({ column }: ColumnProps) => {
  return (
    <th>
      <span>{column.label}</span>
      <Button />
    </th>
  );
};

export default Column;
