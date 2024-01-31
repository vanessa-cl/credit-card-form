/* eslint-disable react/display-name */
import { act, render, screen, waitFor } from "@testing-library/react";
import Main from "../Main";
import userEvent from "@testing-library/user-event";

jest.mock(
  "../../components/CardForm",
  () =>
    ({ formValues, setFormValues, setIsFormCompleted }) => {
      return (
        <div data-testid="mock-card-form">
          <button
            onClick={() => {
              setIsFormCompleted(true);
            }}
          >
            Confirm
          </button>
        </div>
      );
    }
);

describe("main page component tests", () => {
  it("should render component", () => {
    render(<Main />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("should render completed submit component", async () => {
    render(<Main />);
    const formComponent = screen.getByTestId("mock-card-form");
    const completedComponent = screen.queryByTestId("confirm-section");

    expect(formComponent).toBeInTheDocument();
    expect(completedComponent).not.toBeInTheDocument();

    const mockConfirmButton = screen.getByRole("button", { name: "Confirm" });
    await act(async () => userEvent.click(mockConfirmButton));

    await waitFor(async () => {
      expect(await screen.findByTestId("confirm-section")).toBeInTheDocument();
      expect(screen.queryByTestId("card-form")).not.toBeInTheDocument();
    });
  });
});
