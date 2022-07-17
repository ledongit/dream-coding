{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

{
  const fruits = "a, b, c, d";
  const result = fruits.split(",");
  console.log(result);
}

{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

{
  const result = students.map((student) => student.score);
  console.log(result);
}

{
  const result = students.some((student) => student.score < 50);
  console.log(result);
}

console.clear();
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

{
  const result = students
    .map((student) => student.score)
    .sort()
    .join();
  console.log(result);
}
