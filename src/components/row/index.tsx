// types
import type { Row as RowType } from "../../types/row";

interface RowProps {
  row: RowType;
}

const Row = ({ row }: RowProps) => {
  return (
    <tr>
      {Object.entries(row.data).map((cell) => (
        <td>1</td>
      ))}
    </tr>
  );
};

export default Row;
