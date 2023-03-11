import { repos as mocks } from '#constants/mocks'
import { ORG_API_URL, USER_API_URL } from '#constants/url'


export async function getRepositories () {

  const isProduction = process.env.NODE_ENV === 'production'
  if (isProduction) {
    const [userResponse, orgResponse] = await Promise.all([
      fetch(USER_API_URL),
      fetch(ORG_API_URL),
    ])
    const [userData, reposData] = await Promise.all([
      userResponse.json(),
      orgResponse.json(),
    ])
    const repos = [...userData, ...reposData]
    return repos
  } else {
    return mocks
  }
}
