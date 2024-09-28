const convertObjectToArray = (obj: Record<string, unknown>): Array<Record<string, unknown>> => {
  const arrOfObj: Array<Record<string, unknown>> = [];
  if (!Array.isArray(obj)) {
    const keys = Object.keys(obj);

    keys.forEach(key => {
      arrOfObj.push({
        [key]: obj[key]
      })
    })
  }

  return arrOfObj
}

const convertArrayToObject = (arr: Array<Record<string, unknown>>): Record<string, unknown> => {
  return arr.reduce((acc, curr) => {
    const keys = Object.keys(curr)

    keys.forEach(key => {
      acc = {
        ...acc,
        [key]: curr[key]
      }
    })
    return acc
  }, {})
}


const arrObject = convertObjectToArray({ a: 1, b: 2, c: 3})
console.log(arrObject)
console.log(convertArrayToObject([{ a: 1, x: 1 }, { b: 2 }, { c: 3 }]))
