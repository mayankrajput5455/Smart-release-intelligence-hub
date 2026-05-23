const calculateReadiness = (
  jiraIssues,
  githubPRs
) => {

  let score = 100

  // Jira Checks
  const incompleteIssues = jiraIssues.filter(
    (issue) =>
      issue.fields.status.name !== "Done"
  )

  score -= incompleteIssues.length * 10

  // GitHub Checks
  const openPRs = githubPRs.filter(
    (pr) => pr.state === "open"
  )

  score -= openPRs.length * 15

  // Prevent negative
  if (score < 0) {
    score = 0
  }

  // Status
  let status = "Green"

  if (score < 80) {
    status = "Amber"
  }

  if (score < 50) {
    status = "Red"
  }

  return {
    score,
    status,

    incompleteIssues: incompleteIssues.length,

    openPRs: openPRs.length,

    failedGates: [

        ...incompleteIssues.map((issue) => ({
        type: "Jira Issue",
        message: `${issue.key} is not completed`
        })),

        ...openPRs.map((pr) => ({
        type: "Pull Request",
        message: `${pr.title} is still open`
        }))

    ]
  }
}

module.exports = {
  calculateReadiness
}