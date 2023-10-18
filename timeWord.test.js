const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });
  test("timeword valid return", () => {
    expect(timeWord("00:00")).toBe("midnight");
    expect(timeWord("01:00")).toEqual("one o'clock am");
    expect(timeWord("08:12")).toEqual("eight twelve am");
    expect(timeWord("11:59")).toEqual("eleven fifty nine am");
  });
  test("should return error", () => {
    expect(() => {
      timeWord("25:00");
    }).toThrow("Invalid hour input");
  });
  test("should return error message for minutes", () => {
    expect(() => {
      timeWord("10:79");
    }).toThrow("Invalid minute input");
  });
});
