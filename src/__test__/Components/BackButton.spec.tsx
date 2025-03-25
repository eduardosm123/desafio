import { render, screen } from "@testing-library/react";
import BackButton from "../../Components/BackButton/BackButton";
import { BrowserRouter } from 'react-router-dom'
describe("Test BackButton", () => {
  it("test render", async () => {
    render(<BrowserRouter><BackButton page="/" /></BrowserRouter>);
    const idElement = await screen.findByTestId("BackButton");
    expect(idElement).toBeInTheDocument();
  });
});
