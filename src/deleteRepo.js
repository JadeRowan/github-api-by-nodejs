/**
 * Delete repository for authenticated user
 * @param authUser = octokit object of authenticated user
 * @param delRepoName = is name of repository that will be deleted
 */
module.exports =async  function deleteRepo(authUser, delRepoName) {
    const {data: {login}} = await authUser.users.getAuthenticated();
    authUser.repos.delete({
        owner: login,
        repo: delRepoName
    }).then(data => {
        console.log("Репозиторий удален")
        return data.status
    }).catch(e =>{
        console.log(e);
        return e
    });
}
