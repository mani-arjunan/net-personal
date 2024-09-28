// {}()[] - possible char
// ({([])}) - true
// {}()[][] - true
// ((((({}))))) - true
// }{ - false
// {(}) - false
// {{}()[]}{ - false
//

function validParenthesis(inputStr) {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  for (let i = 0; i < inputStr.length; i++) {
    if (!map[inputStr[i]]) {
      stack.push(inputStr[i]);
    } else {
      const poppedVal = stack.pop();

      if (poppedVal !== map[inputStr[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(validParenthesis("((((({})))))"))





// Hospital
// id(primary_key)
// location_id(foreign_key)
// name(string)
// doctor_id(foreign_key)
// patient_id(foreign_key)
//
// Location
// id(primary_key)
// hospital_id(foreign_key)
// name(string)
// address(string)
//
// patient
// id(primary_key)
// hospital_id(f_k)
// doctor_id(f_k)
// location_id(foreign_key)
// disease
//
// 1. retreive hospital_name, disease('Cholrea'), noOfPatients 
//
// select h.name as hospital_name, d.name as disease, COUNT(p.id) as patients 
// from hospital h 
// join patient p on p.id = h.patient_id 
// where p.disease = 'Cholrea'
// group_by h.name, d.name
// order by patients DESC

  








