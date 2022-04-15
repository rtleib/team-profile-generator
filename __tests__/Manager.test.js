const Manager = require("../lib/Manager")
// officeNumber
test("Can set office number info", () => {
    const manager = new Manager("John Smith", "210", "testing@test.com", "officenumber")
    expect(manager.officeNumber).toBe("officenumber")
})