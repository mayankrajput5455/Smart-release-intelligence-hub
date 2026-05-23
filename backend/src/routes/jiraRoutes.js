const express = require("express")

const router = express.Router()

const {
  getJiraIssues
} = require("../services/jiraService")

router.get("/", async (req, res) => {

  const data = await getJiraIssues()

  res.json(data)

})

module.exports = router