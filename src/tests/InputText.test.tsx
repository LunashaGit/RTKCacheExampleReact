import React from "react";
import { cleanup, render } from "@testing-library/react";
import { InputText } from "@/components/InputText";
describe("Given an instance of InputText", () => {
  let component: any;
  beforeEach(() => {
    let value = "test";
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      value = e.target.value;
    };
    component = render(<InputText value={value} onChange={onChange} />);
  });
  afterEach(cleanup);
  it("should render without crashing", async () => {
    expect(component).toBeTruthy();
  });

  //later
});
