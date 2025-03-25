import { render, screen } from "@testing-library/react";
import Loading from "../../Components/Loading/Loading.tsx";
import { BrowserRouter } from 'react-router-dom'

describe("Test Loading", () => {
  it("test render", async () => {
    render(<BrowserRouter><Loading /></BrowserRouter>);
    const idElement = await screen.findByTestId("Loading");
    expect(idElement).toBeInTheDocument();
  });
});
