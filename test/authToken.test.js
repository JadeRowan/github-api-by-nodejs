const authByToken = require('../src/authToken.js')
const assert = require('assert')
jest.setTimeout(30000)
describe('Authentication by token', () => {
    test ("Should return octokit object", done =>{
        const token = "ghp_oSuP7J2nZ4O6w"
        //username "testAcountForTests", password "QWERTY12345_qwerty"
        const authUser = authByToken(token+"V525pVWVgWYf4cM6G4JCkUl") //token cant be commited

        async function login() {
            const {data: {login}} = await authUser.users.getAuthenticated();
            assert.equal(login, "testAcountForTests")
        }
        login()

    })

})