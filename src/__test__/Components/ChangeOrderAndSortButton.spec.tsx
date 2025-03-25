import {   render, screen } from "@testing-library/react";
import ChangeOrderAndSortButton from "../../Components/ChangeOrderAndSortButton/ChangeOrderAndSortButton";
import { Provider } from "react-redux";
import store from "../../Redux/store.ts";

describe("Test ChangeOrderAndSortButton", () => {
  it("test render", async () => {
    render(
      <Provider store={store}>
        <ChangeOrderAndSortButton information="teste" order="teste" sort="" />
      </Provider>
    );
    const idElement = await screen.findByTestId("ChangeOrderAndSortButton");
    expect(idElement).toBeInTheDocument();
  }); 
});
