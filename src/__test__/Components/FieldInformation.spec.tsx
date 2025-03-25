import { render, screen } from "@testing-library/react";
import FieldInformation from "../../Components/FieldInformation/FieldInformation.tsx";
import { Provider } from "react-redux";
import store from "../../Redux/store.ts";

describe("Test FieldInformation", () => {
  it("test render", async () => {
    render(
      <Provider store={store}>
        <FieldInformation  field="exemple" information="exemplo"/>
      </Provider>
    );
    const idElement = await screen.findByTestId("FieldInformation");
    expect(idElement).toBeInTheDocument();
  }); 
});
