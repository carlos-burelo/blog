import REPOS from '#constants/mocks'
import { ORG_GITHUB_API, USER_GITHUB_API, IS_PROD } from '#constants/data'


export async function getRepositories () {
  if (IS_PROD) {
    const res = await Promise.all([fetch(USER_GITHUB_API), fetch(ORG_GITHUB_API)])
    const data = await Promise.all(res.map(async (r) => await r.json()))
    const repos = data.flat()
    return repos
  } else {
    return REPOS
  }
}
