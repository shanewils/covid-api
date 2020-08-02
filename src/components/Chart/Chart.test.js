import React from "react";
import { render } from "@testing-library/react";
import Chart from "./Chart";

describe("Chart tests", () => {
  it("should render", () => {
    expect(render(<Chart />)).toBeTruthy();
  });
});
