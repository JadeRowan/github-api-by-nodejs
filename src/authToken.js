/**
 * This method creates authenticated user octokit object,
 * by using authenticaton token for operations with his repositories
 * @param token
 * @returns {(void & {paginate: import("@octokit/plugin-paginate-rest").PaginateInterface} & RestEndpointMethods & Api & Octokit) | Octokit}
 */
module.exports = function authByToken(token) {
    const { Octokit } = require("@octokit/rest");
    return new Octokit({auth: token})
}
