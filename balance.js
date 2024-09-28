const formString = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ")") {
      stack.push(str[i]);
    } else {
      let temp = "";
      let num = "";
      let count = 0;

      while (stack.length) {
        const val = stack.pop();

        if (val === "(") {
          if (count === 1) {
            stack.push(val);
            break;
          }
          count++;
        } else if (!isNaN(+val)) {
          num = val + num;
        } else {
          if (count === 1 && num) {
            temp = val + temp.repeat(+num);
            num = "";
          } else {
            temp = val + temp;
          }
        }
      }

      if (num) {
        stack.push(temp.repeat(+num));
      } else {
        stack.push(temp);
      }
    }
  }

  return stack.join("");
};

console.log(formString("3(b2(a)b)"));
console.log(formString("3(bs2(a)z)"));
console.log(formString("2(a3(b))"));
console.log(formString("3(c2(b))"));
console.log(formString("5(a)"));
console.log(formString("2(b3(a))c"));
console.log(formString("2(a2(b3(c)))"));
console.log(formString("2(abc)3(de)"));
