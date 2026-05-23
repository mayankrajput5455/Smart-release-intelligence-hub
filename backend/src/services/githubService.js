const axios = require("axios")

const getPullRequests = async () => {

  try {

    const response = await axios.get(

      `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/pulls?state=all`,

      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      }

    )

    return response.data

  } catch (error) {

    console.log(error.response?.data || error.message)

    return {
      error: "Failed to fetch GitHub PRs"
    }

  }

}

module.exports = {
  getPullRequests
}