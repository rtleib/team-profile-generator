const Intern = require("../lib/Intern")
// school
test("Can set school info", () => {
    const intern = new Intern("John", "210", "testing@test.com", "school")
    expect(intern.school).toBe("school")
})