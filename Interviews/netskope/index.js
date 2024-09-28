const json = [
  {
    name: "Manikandan",
    age: 21,
    address: "Chennai",
  },
  {
    name: "Hema",
    age: 21,
    address: "Nagapattinam",
  },
  {
    name: "Cristiano Ronaldo",
    age: 21,
    address: "Portugal",
  },
  {
    name: "Messi",
    age: 21,
    address: "Arg",
  },
  {
    name: "Messiasdalksjdaksjdkajsdasd",
    age: 21,
  },
];

const sort = (arr, key) => {
  const newArr = [...arr];

  return newArr
    .sort(
      (a, b) =>
        (b[key] || "").toString().length - (a[key] || "").toString().length,
    )[0]
    [key].toString().length;
};

const constructConsole = (json) => {
  const columns = ["Id"];
  for (let i in json[0]) {
    columns.push(i);
  }
  const columnsMap = {
    Id: 2,
  };
  let totalLength = columns.length + 2;

  for (let i = 0; i < columns.length; i++) {
    const column = columns[i];
    const length = column === "Id" ? 2 : sort(json, column);

    totalLength += length;
    columnsMap[column] = length > column.length ? length : column.length;
  }

  const totalLengthCache = new Array(totalLength).fill("-").join("");
  let str = totalLengthCache + "\n";

  for (let i = 0; i < columns.length; i++) {
    str +=
      "|" +
      columns[i] +
      new Array(columnsMap[columns[i]] - columns[i].length).fill(" ").join("");
  }

  str += "|" + "\n" + new Array(totalLength).fill("-").join("") + "\n";

  for (let i = 0; i < json.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      const value = json[i][columns[j]] || (columns[j] === "Id" ? i + 1 : "NA");
      str +=
        "|" +
        value +
        new Array(columnsMap[columns[j]] - value.toString().length)
          .fill(" ")
          .join("");
    }

    str += "|" + "\n";
  }

  str += totalLengthCache + "\n";

  return str;
};

console.log(constructConsole(json));
