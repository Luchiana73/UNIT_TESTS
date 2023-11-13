const studentGroups = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];
function getTheBestStudent(groups) {
  const allScores = [];
  let bestScore;

  const studentWithBestScore = [];
  groups.forEach((group) => {
    group.forEach((student) => {
      if (typeof student.score === "number" && student.score > 0) {
        allScores.push(student.score);
      }
    });
  });
  bestScore = Math.max(...allScores);
  groups.forEach((group) => {
    group.forEach((student) => {
      if (student.score === bestScore) {
        studentWithBestScore.push(student);
      }
    });
  });

  if (studentWithBestScore.length === 0) {
    console.log("Никто не набрал дополнительных баллов");
    return "Лучшего студента нет";
  }

  let earliestDate = new Date();
  let bestStudent;

  studentWithBestScore.forEach((student) => {
    if (student.date && new Date(student.date) < earliestDate) {
      earliestDate = new Date(student.date);
      bestStudent = student;
    }
  });

  console.log(`Поздравляем студента ${bestStudent.name} с лучшим результатом!`);
  return bestStudent.name;
}
getTheBestStudent(studentGroups);

module.exports = getTheBestStudent;
