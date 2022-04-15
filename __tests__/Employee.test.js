const { TestWatcher } = require("jest")
const Employee = require("../lib/Employee")
// object
test("Can create employee object", () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
})
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()
