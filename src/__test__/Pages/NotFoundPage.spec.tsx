import {   render, screen } from "@testing-library/react";
import NotFoundPage from "../../Pages/NotFoundPage.tsx"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "../../Redux/store.ts";
import '@testing-library/jest-dom';
describe("Test Home", () => {
  it("test render", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter><NotFoundPage /></BrowserRouter>
      </Provider>
    );
    const idElement = await screen.findByTestId("NotFoundPage");
    expect(idElement).toBeInTheDocument();
  }); 
});
