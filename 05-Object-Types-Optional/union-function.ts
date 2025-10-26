function printEmpId(empId: number | string) {
  if (typeof empId === "number") {
    console.log("Numeric ID:", empId);
  } else {
    console.log("String ID:", empId);
  }
}

printEmpId(111);
printEmpId("A1101");
