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
// email
// getName()
// getId()
// getEmail()
// getRole()
