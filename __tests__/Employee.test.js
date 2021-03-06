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
test("We can get the name of the employee", () => {
    const employee = new Employee("John Smith")
    expect(employee.getName()).toBe("John Smith")
})
// getId()
test("We can get the id of the employee", () => {
    const employee = new Employee("John Smith", "210", "testing@test.com")
    expect(employee.getId()).toBe("210")
})
// getEmail()
test("We can get the email of the employee", () => {
    const employee = new Employee("John Smith", "210", "testing@test.com")
    expect(employee.getEmail()).toBe("testing@test.com")
})
// getRole()
test("We can get the role of the employee", () => {
    const employee = new Employee()
    expect(employee.getRole()).toBe("employee")
})