/**
 * Create new repository for authenticated user
 * @param authUser = octokit object of authenticated user
 * @param newRepoName = is name of repository that will be created
 */
module.exports = function createRepo(authUser, newRepoName) {

    authUser.repos.createForAuthenticatedUser({
        name: newRepoName
    }).then(data => {
        console.log("Репозиторий создан")
        return data.status

    }).catch(e => {
        console.log(e);
        return e
    });

}
