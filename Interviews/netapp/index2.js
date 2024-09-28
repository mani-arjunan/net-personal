// const list1 = [1, 2, 4, 5] // 4
// const list2 = [1, 4, 3] // 3, 1
// const list3 = [1, 2, 3, 4, 5]

const list1 = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "2",
  },
  {
    id: 3,
    name: "3",
  },
];
const list2 = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 4,
    name: "4",
  },
];

function getUniqueItems(list1, list2) {
  const map = {};

  for (let i = 0; i < list1.length; i++) {
    if (!map[list1[i].id]) {
      map[list1[i].id] = list1[i];
    }
  }

  for (let i = 0; i < list2.length; i++) {
    if (!map[list2[i].id]) {
      map[list2[i].id] = list2[i];
    }
  }

  return Object.values(map);
}

// console.log(getUniqueItems(list1, list2));

// UserSchema {
//   // id: number; // user_id
//   first_name: string;
//   last_name: string;
//   age: number;
//   email: string; // email unique
//   password: string; // hashed value
//   mobile_number: number; //
//   address: Address; //
//   picture: string; // url
//   metadata: object; //
// }

const str = ["I am in   Chennai"];

// output => ['Chennai in am I']

function reverseStr(arr) {
  let reversedStr = "";
  let tempStr = "";

  for (let i = arr[0].length - 1; i >= 0; i--) {
    if (arr[0][i] === " " || i === 0) {
      if (i === 0) {
        return [reversedStr + arr[0][i]];
      }
      reversedStr += tempStr + " ";
      tempStr = "";
    } else {
      tempStr = arr[0][i] + tempStr;
    }
  }
}

console.log(reverseStr(str));
