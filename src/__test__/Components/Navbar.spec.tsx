import { render, screen } from "@testing-library/react";
import NavBar from "../../Components/Navbar/Navbar.tsx";
 
describe("Test NavBar", () => {
  it("test render", async () => {
    render(<NavBar><h1>teste</h1></NavBar>);
    const idElement = await screen.findByTestId("NavBar");
    expect(idElement).toBeInTheDocument();
  });
});
