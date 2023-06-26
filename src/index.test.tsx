import { render, screen } from "@testing-library/react";
import Index from "./index"; // Pfad anpassen, um auf die Datei mit der Index Komponente zu verweisen

describe("Index component", () => {
  test("renders correctly", () => {
    render(
      <Index
        columns={[
          { id: "name", label: "Name" },
          { id: "age", label: "Age" },
        ]}
        rows={[
          {
            data: {
              name: "Hans",
              age: "Peter",
            },
          },
        ]}
      />
    );
    const element = screen.getByText("Name");
    expect(element).toBeInTheDocument();
  });
});
