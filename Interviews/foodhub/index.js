// Given a list of students data, write a function that returns student id(s) for specific attributes like country, hobbies etc.
//
// Eg: input “country / hobbies” and the output will be students “4“ “5“
//
let students = [
  { id: "1", country: "UK", hobbies: ["photography", "painting"] },

  { id: "2", country: "India", hobbies: ["reading", "painting", "gardening"] },

  {
    id: "3",

    country: "France",

    hobbies: ["photography", "gardening", "music"],
  },

  { id: "4", country: "Greece", hobbies: ["music", "painting"] },

  { id: "5", country: "Greece", hobbies: ["dancing", "painting"] },
];

function getStudentsId(param) {
  const map = {};

  for (let i = 0; i < students.length; i++) {
    if (map[students[i].country]) {
      map[students[i].country].push(students[i].id);
    } else {
      map[students[i].country] = [students[i].id];
    }

    for (let j = 0; j < students[i].hobbies.length; j++) {
      if (map[students[i].hobbies[j]]) {
        map[students[i].hobbies[j]].push(students[i].id);
      } else {
        map[students[i].hobbies[j]] = [students[i].id];
      }
    }
  }

  return map[param];
}

// Time O(n * m) // space O(n)

function getStudentsId(param) {
  return students
    .filter(
      (student) => student.hobbies.includes(param) || student.country === param,
    )
    .map((s) => s.id);
}

// Time O(n * m + n) => O(n * m)

console.log(getStudentsId("painting"));
