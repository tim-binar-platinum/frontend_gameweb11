import Login from "../pages/login";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Login", () => {
  it("renders login page", () => {
    render(<Login />);
    // check if all components are rendered
    expect(screen.getByTestId("container-login")).toBeInTheDocument();
    expect(screen.getByTestId("form-login")).toBeInTheDocument();
  });
});
