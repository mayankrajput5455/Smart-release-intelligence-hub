const axios = require("axios")

const getJiraIssues = async () => {

  try {

    const response = await axios.get(

      `${process.env.JIRA_BASE_URL}/rest/api/3/search/jql`,

      {
        params: {
          jql: 'project = SCRUM',
          fields: 'summary,status,assignee'
        },

        auth: {
          username: process.env.JIRA_EMAIL,
          password: process.env.JIRA_API_TOKEN
        }
      }

    )

    return response.data

  } catch (error) {

    console.log(error.response?.data || error.message)

    return {
      error: "Failed to fetch Jira issues"
    }

  }

}

module.exports = {
  getJiraIssues
}