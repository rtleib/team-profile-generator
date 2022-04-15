const Intern = require("../lib/Intern")
// school
test("Can set school info", () => {
    const intern = new Intern("John Smith", "210", "testing@test.com", "school")
    expect(intern.school).toBe("school")
})
// getSchool()
test("We can get the School of the intern", () => {
    const intern = new Intern("John Smith", "210", "testing@test.com", "school")
    expect(intern.getSchool()).toBe("school")
})
// getRole()
test("We can get the Role of the intern", () => {
    const intern = new Intern("John Smith", "210", "testing@test.com", "school")
    expect(intern.getRole()).toBe("intern")
})