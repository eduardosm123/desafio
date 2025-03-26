import { render, screen } from "@testing-library/react";
import ChangePage from "../../Components/ChangePage/ChangePage.tsx";
import { Provider } from "react-redux";
import store from "../../Redux/store.ts";
import '@testing-library/jest-dom';
describe("Test FieldInformation", () => {
  it("test render", async () => {
    render(
      <Provider store={store}>
        <ChangePage />
      </Provider>
    );
    const idElement = await screen.findByTestId("ChangePage");
    expect(idElement).toBeInTheDocument();
  }); 
});
