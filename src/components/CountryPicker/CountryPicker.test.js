import React from "react";
import { render } from "@testing-library/react";
import CountryPicker from "./CountryPicker";

describe("CountryPicker tests", () => {
  it("should render", () => {
    expect(render(<CountryPicker />)).toBeTruthy();
  });
});
