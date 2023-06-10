import { calc } from "./index";

describe("calc function", () => {
  test("it adds two numbers", () => {
    const result = calc(1, 2);
    expect(result).toBe(3);
  });
});
