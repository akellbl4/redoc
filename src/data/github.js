let currentData = {}

module.exports = async function getLatestReleaseVersion() {
  if (currentData.latestVersion) {
    return currentData
  }

  try {
    const fetch = await import('node-fetch')
    const res = await fetch(process.env.GITHUB_REPO_URL)

    if (!res.ok) {
      throw new Error(`[ERROR] Status: ${res.status}: ${res.statusText}`)
    }

    const data = await res.json()

    return { currentData: data[0].tag_name || '' }
  } catch (e) {
    console.error(e.message)
    return currentData
  }
}
