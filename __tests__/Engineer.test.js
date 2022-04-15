const Engineer = require("../lib/Engineer")
// github
test("Can set github info", () => {
    const engineer = new Engineer("John", "210", "testing@test.com", "test")
    expect(engineer.github).toBe("test")
})