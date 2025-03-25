import {   render, screen } from "@testing-library/react";
import User from "../../Pages/User.tsx"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "../../Redux/store.ts";

describe("Test User", () => {
  it("test render", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter><User /></BrowserRouter>
      </Provider>
    );
    const idElement = await screen.findByText("GitHub Desafio");
    expect(idElement).toBeInTheDocument();
  }); 
});
