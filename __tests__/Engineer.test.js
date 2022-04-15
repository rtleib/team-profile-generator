const Engineer = require("../lib/Engineer")
// github
test("Can set github info", () => {
    const engineer = new Engineer("John", "210", "testing@test.com", "test")
    expect(engineer.github).toBe("test")
})
// getGithub()
test("We can get the GitHub of the engineer", () => {
    const engineer = new Engineer("John Smith", "210", "testing@test.com", "test")
    expect(engineer.getGithub()).toBe("test")
})
// getRole()
test("We can get the role of the engineer", () => {
    const engineer = new Engineer()
    expect(engineer.getRole()).toBe("engineer")
})