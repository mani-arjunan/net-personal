const path = "./path/hello/";

function route(path) {
  const file = require(path);
  const splittedPath = path.split("/").filter((_) => _);
  const funName = splittedPath[splittedPath.length - 1];

  const result = file[funName]();

  console.log(result);
}

route(path);
