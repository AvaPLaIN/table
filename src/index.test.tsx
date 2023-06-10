import { render, screen } from "@testing-library/react";
import Index from "./index"; // Pfad anpassen, um auf die Datei mit der Index Komponente zu verweisen

describe("Index component", () => {
  test("renders correctly", () => {
    render(<Index />);
    const element = screen.getByText("index");
    expect(element).toBeInTheDocument();
  });
});
