import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Test Button component", () => {
  it("renders the component", () => {
    render(<Button>Test data</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("renders the correct child data", () => {
    render(<Button>Test data</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/test data/i);
  });
});
