const getTheBestStudent = require("./students");
const {
  case1,
  case2,
  case3,
  case4,
  case5,
  case6,
  case7,
  case8,
  case9,
} = require("./data");

describe("Test cases for function getTheBestStudent", () => {
  it("The highest score with different dates", () => {
    const result = getTheBestStudent(case1);
    expect(result).toBe("Vasily");
  });

  it("The highest score with the same date", () => {
    const result = getTheBestStudent(case2);
    expect(result).toEqual(["Ivan", "Stepan"]);
  });

  it("No one has additional points", () => {
    const result = getTheBestStudent(case3);
    expect(result).toBe("Лучшего студента нет");
  });

  it("No data provided", () => {
    const result = getTheBestStudent(case4);
    expect(typeof result).not.toBe("string");
  });

  it("Empty groups", () => {
    const result = getTheBestStudent(case5);
    expect(result).toBe("Лучшего студента нет");
  });

  it("Different data format", () => {
    const result = getTheBestStudent(case6);
    expect(result).toBe("Ivan");
  });

  it("Non-numeric scores", () => {
    const result = getTheBestStudent(case7);
    expect(result).not.toBe("Ivan");
  });

  it("Negative score", () => {
    const result = getTheBestStudent(case8);
    expect(result).toBe("Oleg");
  });

  it("Correct result type", () => {
    const result = getTheBestStudent(case9);
    expect(typeof result).toBe("string");
  });
});
