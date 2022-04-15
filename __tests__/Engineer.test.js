const Engineer = require("../lib/Engineer")
// github
test("Can set github info", () => {
    const engineer = new Engineer("John Smith", "210", "testing@test.com", "github")
    expect(engineer.github).toBe("github")
})
// getGithub()
test("We can get the GitHub of the engineer", () => {
    const engineer = new Engineer("John Smith", "210", "testing@test.com", "github")
    expect(engineer.getGithub()).toBe("github")
})
// getRole()
test("We can get the role of the engineer", () => {
    const engineer = new Engineer()
    expect(engineer.getRole()).toBe("engineer")
})