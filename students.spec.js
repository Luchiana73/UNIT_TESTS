const getTheBestStudent = require("./students");

describe("Test cases for function getTheBestStudent", () => {
  it("The highest score with different dates", () => {
    const case1 = [
      [
        { name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Olga", score: 0, date: "" },
        { name: "Oleg", score: 9, date: "2022-10-01" },
      ],
      [
        { name: "Margo", score: 0, date: "2022-10-11" },
        { name: "Natalia", score: 25, date: "2022-10-10" },
        { name: "Marina", score: 25, date: "2022-10-01" },
        { name: "Vadimyr", score: 1, date: "2022-10-11" },
      ],
      [
        { name: "Irina", score: 0, date: "2022-10-11" },
        { name: "Vasily", score: 35, date: "2022-10-10" },
        { name: "David", score: 0, date: "2022-10-11" },
      ],
    ];
    const result = getTheBestStudent(case1);
    expect(result).toBe("Vasily");
  });
  it("The highest score with the same date", () => {
    const case2 = [
      [
        { name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Maria", score: 5, date: "2022-10-10" },
        { name: "Olga", score: 0, date: "" },
        { name: "Stepan", score: 35, date: "2022-10-11" },
      ],
      [
        { name: "Margo", score: 0, date: "2022-10-11" },
        { name: "Natalia", score: 25, date: "2022-10-10" },
        { name: "Marina", score: 25, date: "2022-10-01" },
      ],
    ];
    const result = getTheBestStudent(case2);
    expect(result).toEqual(["Ivan, Stepan"]);
  });
  it("No one has additional points", () => {
    const case3 = [
      [
        { name: "Stepan", score: 0, date: "2022-10-12" },
        { name: "Oleg", score: 0, date: "2022-10-01" },
        { name: "Zanna", score: 0, date: "2022-10-11" },
      ],
      [
        { name: "Natalia", score: 0, date: "2022-10-10" },
        { name: "Denis", score: 0, date: "2022-10-02" },
        { name: "Vadimyr", score: 0, date: "2022-10-11" },
      ],
      [
        { name: "David", score: 0, date: "2022-10-11" },
        { name: "Kristina", score: 0, date: "2022-10-12" },
      ],
    ];
    const result = getTheBestStudent(case3);
    expect(result).toBe("Лучшего студента нет");
  });
  it("No data provided", () => {
    const case4 = [
      [
        { name: "Ivan", score: 35, date: "" },
        { name: "Olga", score: 0, date: "" },
        { name: "Stepan", score: 35, date: "" },
      ],
      [
        { name: "Margo", score: 0, date: "" },
        { name: "Natalia", score: 25, date: "" },
      ],
    ];
    const result = getTheBestStudent(case4);
    expect(typeof result).not.toBe("string");
  });
  it("Empty groups", () => {
    const case5 = [[], [], []];
    const result = getTheBestStudent(case5);
    expect(result).toBe("Лучшего студента нет");
  });

  it("Different data format", () => {
    const case6 = [
      [
        { name: "Ivan", score: 35, date: "2022.10.11" },
        { name: "Maria", score: 5, date: "2022/10/10" },
        { name: "Stepan", score: 35, date: "2022-10-12" },
        { name: "Oleg", score: 9, date: "2022-10-01" },
        { name: "Zanna", score: 15, date: "2022/10/11" },
      ],
      [
        { name: "Margo", score: 0, date: "2022-10-11" },
        { name: "Natalia", score: 25, date: "2022/10/10" },
        { name: "Marina", score: 25, date: "2022.10.01" },
        { name: "Vadimyr", score: 1, date: "2022-10-11" },
      ],
    ];
    const result = getTheBestStudent(case6);
    expect(result).toBe("Ivan");
  });
  it("Non-numeric scores", () => {
    const case7 = [
      [
        { name: "Ivan", score: "thirty five", date: "2022-10-11" },
        { name: "Maria", score: "five", date: "2022-10-10" },
        { name: "Stepan", score: "thirty five", date: "2022-10-12" },
      ],
      [
        { name: "Margo", score: "zero", date: "2022-10-11" },
        { name: "Natalia", score: "twenty five", date: "2022-10-10" },
        { name: "Marina", score: "twenty five", date: "2022-10-01" },
      ],
    ];
    const result = getTheBestStudent(case7);
    expect(result).not.toBe("Ivan");
  });
  it("Negative score", () => {
    const case8 = [
      [
        { name: "Ivan", score: -35, date: "2022.10.11" },
        { name: "Maria", score: 5, date: "2022/10/10" },
        { name: "Stepan", score: -35, date: "2022-10-12" },
        { name: "Oleg", score: 9, date: "2022-10-01" },
        { name: "Zanna", score: -15, date: "2022/10/11" },
      ],
      [
        { name: "Margo", score: 0, date: "2022-10-11" },
        { name: "Natalia", score: -25, date: "2022/10/10" },
        { name: "Marina", score: -25, date: "2022.10.01" },
        { name: "Vadimyr", score: 1, date: "2022-10-11" },
      ],
    ];
    const result = getTheBestStudent(case8);
    expect(result).toBe("Oleg");
  });
  it("Correct result type", () => {
    const case9 = [
      [
        { name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Maria", score: 5, date: "2022-10-10" },
        { name: "Oleg", score: 9, date: "2022-10-01" },
        { name: "Stepan", score: 35, date: "2022-10-12" },
      ],
      [
        { name: "Margo", score: 0, date: "2022-10-11" },
        { name: "Natalia", score: 25, date: "2022-10-10" },
        { name: "Marina", score: 25, date: "2022-10-01" },
      ],
    ];
    const result = getTheBestStudent(case9);
    expect(typeof result).toBe("string");
  });
});
