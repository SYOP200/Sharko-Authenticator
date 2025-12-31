// tests/sharko.test.js
import { render } from "@testing-library/react";
import SharkoAuth from "../src/components/SharkoAuth";

test("renders login header", () => {
  const { getByText } = render(<SharkoAuth appName="TestApp" />);
  expect(getByText("Login to TestApp")).toBeTruthy();
});
