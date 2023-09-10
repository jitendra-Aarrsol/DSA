let input = [1, 3, 2, 5, 8, 7, 6, 2, 3, 4];
const result = input.map((ele) => {
  if (ele % 2 === 0) {
    return ele * 2;
  } else {
    return ele * 3;
  }
});
const evenResult = result.filter((ele) => ele % 2 === 0);
console.log(evenResult);
console.log(result);
result.forEach((ele) => {
  if (ele % 2 === 0) console.log(ele);
});
const employeeDetails = [
  {
    empName: "Ram",
    empAge: 12,
    empMobile: 9876543210,
  },
  {
    empName: "sonu",
    empAge: 22,
    empMobile: 9876543211,
  },
  {
    empName: "Ashish",
    empAge: 26,
    empMobile: 9876543221,
  },
];
// employeeDetails.sort((a, b) => a.empName.localeCompare(b.empName));
// const sorted = employeeDetails
//   .filter((ele) => {
//     const data = [];
//     for (let name in ele) {
//       data.push(ele[name]);
//     }
//     return data.sort();
//   })
//   .sort();
console.log(employeeDetails.sort((a, b) => a.empName.localeCompare(b.empName)));

// db.employeeDetails.update({ _id: "" }, { $set: { empName: "rana" } });
