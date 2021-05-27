/**
 * Upload file into repository for authenticated user
 * @param authUser = octokit object of authenticated user
 * @param repo = repository where file will be added
 * @param PATH = path of the file that will be uploaded
 * @param commitMassage = message that will mark this operation on github
 * @returns {Promise<void>}
 */
module.exports = async function addFile(authUser, repo, PATH, commitMassage) {
    const {data: {login}} = await authUser.users.getAuthenticated();
    const fs = require('fs');
    const contents = fs.readFileSync(PATH, {encoding: 'base64'});
    authUser.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner: login,
        repo: repo,
        path: PATH,
        message: commitMassage,
        content: contents
    }).then(data => {
        console.log("Файл обновлен")
        return data.status
    }).catch(e =>{
        console.log(e);
    });
}