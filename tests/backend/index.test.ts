import backend from "../../src/backend";

describe("backend", () => {
  test('Returns "This is the backend!"', () => {
    expect(backend()).toBe("This is the backend!");
  });
});
