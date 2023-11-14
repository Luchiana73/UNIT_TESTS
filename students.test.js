const getTheBestStudent = require("./students");

describe("Parametrized tests for function getTheBestStudent", () => {
  it.each([
    [
      "The highest score with different dates",
      [
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
      ],
      "Vasily",
    ],
    [
      "The highest score with the same date",
      [
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
      ],
      ["Ivan", "Stepan"],
    ],
    [
      "No one has additional points",
      [
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
      ],
      "Лучшего студента нет",
    ],
    [
      "No data provided",
      [
        [
          { name: "Ivan", score: 35, date: "" },
          { name: "Olga", score: 0, date: "" },
          { name: "Stepan", score: 35, date: "" },
        ],
        [
          { name: "Margo", score: 0, date: "" },
          { name: "Natalia", score: 25, date: "" },
        ],
      ],
      "string",
    ],
    ["Empty groups", [[], [], []], "Лучшего студента нет"],
    [
      "Different data format",
      [
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
      ],
      "Ivan",
    ],
    [
      "Non-numeric scores",
      [
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
      ],
      "Лучшего студента нет",
    ],
    [
      "Negative score",
      [
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
      ],
      "Oleg",
    ],
  ])("%p", (testCase, studentsData, expectedResult) => {
    const result = getTheBestStudent(studentsData);
    expect(result).toEqual(expectedResult);
  });
});
