import {   render, screen } from "@testing-library/react";
import Home from "../../Pages/Home.tsx"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "../../Redux/store.ts";

describe("Test Home", () => {
  it("test render", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter><Home /></BrowserRouter>
      </Provider>
    );
    const idElement = await screen.findByTestId("Home");
    expect(idElement).toBeInTheDocument();
  }); 
});
