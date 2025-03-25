import {   render, screen } from "@testing-library/react";
import ErrorPage from "../../Pages/ErrorPage.tsx"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "../../Redux/store.ts";

describe("Test ErrorPage", () => {
  it("test render", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter><ErrorPage /></BrowserRouter>
      </Provider>
    );
    const idElement = await screen.findByTestId("ErrorPage");
    expect(idElement).toBeInTheDocument();
  }); 
});
