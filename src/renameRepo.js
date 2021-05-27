/**
 * Renames repository for authenticated user
 * @param authUser = octokit object of authenticated user
 * @param oldRepoName = name of repository that will be updated
 * @param newRepoName = new name that will have repository
 * @returns {Promise<void>}
 */
module.exports = async function renameRepo(authUser, oldRepoName, newRepoName) {
    const {data: {login}} = await authUser.users.getAuthenticated();
    authUser.request('PATCH /repos/{owner}/{repo}', {
        owner: login,
        repo: oldRepoName,
        name: newRepoName
    }).then(data => {
        console.log("Репозиторий переименован")
        return data.status
    }).catch(e =>{
        console.log(e);
        return e
    })
}
