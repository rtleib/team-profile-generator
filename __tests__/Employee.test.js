const { TestWatcher } = require("jest")
const Employee = require("../lib/Employee")
// object
test("Can create employee object", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})
// name
test("Can set the name of the employee", () =>{
    const employee = new Employee("John Smith", "210", "testing@test.com")
    console.log(employee)
    expect(employee.name).toBe("John Smith")
})
// id
test("Can set the id of the employee", () =>{
    const employee = new Employee("John Smith", "210", "testing@test.com")
    expect(employee.id).toBe("210")
})
// email
test("Can set the email of the employee", () =>{
    const employee = new Employee("John Smith", "210", "testing@test.com")
    expect(employee.email).toBe("testing@test.com")
})
// getName()
// getId()
// getEmail()
// getRole()
