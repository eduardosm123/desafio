import {   render, screen } from "@testing-library/react";
import Repository from "../../Pages/Repository.tsx"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "../../Redux/store.ts";
import '@testing-library/jest-dom';

describe("Test Repository", () => {
  it("test render", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter><Repository /></BrowserRouter>
      </Provider>
    );
    const idElement = await screen.findByTestId("Repository");
    expect(idElement).toBeInTheDocument();
  }); 
});
