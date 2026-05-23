const express = require("express")

const router = express.Router()

const {
  getPullRequests
} = require("../services/githubService")

router.get("/", async (req, res) => {

  const data = await getPullRequests()

  res.json(data)

})

module.exports = router