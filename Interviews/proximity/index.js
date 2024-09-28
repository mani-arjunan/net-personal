// "(())" | "{([])}" | "{{(}}" | "}{" | "(){}[]((()))"

// {} {{} ({}) {(} [{()}]

function balanceParanthesis(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{" || str[i] === "(" || str[i] === "[") {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const poppedValue = stack.pop();

      if (poppedValue === "{" && str[i] === "}") {
        continue;
      } else if (poppedValue === "(" && str[i] === ")") {
        continue;
      } else if (poppedValue === "[" && str[i] === "]") {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}

// console.log(balanceParanthesis('(())')) // true
// console.log(balanceParanthesis('{([])}')) // true
// console.log(balanceParanthesis('{{(}}')) // false
// console.log(balanceParanthesis('}{')) // false
console.log(balanceParanthesis("}{")); // false
// console.log(balanceParanthesis('(){}[]((()))')) // true
