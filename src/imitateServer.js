/**
 * This file is used to dataForTests github-api commands like in console app
 */
var createRepo = require('./createRepo.js')
var deleteRepo = require('./deleteRepo.js')
var renameRepo = require('./renameRepo.js')
var authByToken = require('./authToken.js')
var addFile = require('./addFile.js')
const token = "ghp_oSuP7J2nZ4O6w"
//username "testAcountForTests", password "QWERTY12345_qwerty"
const authUser = authByToken(token+"V525pVWVgWYf4cM6G4JCkUl")
const { Octokit } = require("@octokit/rest");
let cmd = process.argv[2]
let param1 = process.argv[3]
let param2 = process.argv[4]
let param3 = process.argv[5]
const PATH =".\\dataForTests\\someText.txt"
console.log("command is '"+cmd+"'\nparam1 = '"+param1+"'\nparam2 = '"+param2+"'\nparam3 = '"+param3+"'")

//example: node imitateServer create testRepo
if (cmd == "create") {
    createRepo(authUser, param1)
}

//example: node imitateServer rename testRepo renamedTestRepo
if (cmd == "rename") {
    renameRepo(authUser, param1, param2)
}

//example: node imitateServer addFile renamedTestRepo PATH innitCommit
//note: for this file test i used const PATH = ".\\dataForTests\\someText.txt"
//but you can use real file path instead
if (cmd == "addFile") {
    addFile(authUser, param1, PATH, param3)
}

//example: node imitateServer del renamedTestRepo
if (cmd == "del") {
    deleteRepo(authUser, param1)
}





