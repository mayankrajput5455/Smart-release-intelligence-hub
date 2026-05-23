const express = require("express")

const router = express.Router()

const {
  getJiraIssues
} = require("../services/jiraService")

const {
  getPullRequests
} = require("../services/githubService")

const {
  generateReleaseNotes
} = require("../services/aiService")

const {
  calculateReadiness
} = require("../services/readinessService")

router.get("/", async (req, res) => {

  const jiraData = await getJiraIssues()

  const githubData = await getPullRequests()

  const aiNotes = await generateReleaseNotes(
    jiraData.issues,
    githubData
  )

  const readiness = calculateReadiness(
    jiraData.issues,
    githubData
  )

  res.json({
    aiNotes,
    readiness
  })

})

module.exports = router