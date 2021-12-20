import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Settings } from "../Settings";
import { store } from "../../../Store";

describe("test Settings component", () => {
  it("find 'Настройка фона' text", () => {
    render(
      <Provider store={store}>
        <Settings />
     </Provider> 
    );
    const linkElement = screen.getByText(/Настройка фона/i);
    expect(linkElement).toBeInTheDocument();
  });
});