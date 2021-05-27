const createRepo = require('../src/createRepo.js')
const authToken = require('../src/authToken.js')
const assert = require('assert')

describe('Create repository', () => {
    test ("Should return success status code", done =>{
        const token = "ghp_oSuP7J2nZ4O6w"
//username "testAcountForTests", password "QWERTY12345_qwerty"
        const authUser = authToken(token+"V525pVWVgWYf4cM6G4JCkUl") //token cant be commited
        const randomInt = Math.floor(Math.random() * (999999 - 100000)) + 100000;
        const returnedStatus = createRepo(authUser, "testRepo"+randomInt)

        assert.strictEqual(returnedStatus, 201)
    })

})