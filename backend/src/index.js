const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") })

console.log("Looking for .env at:", path.resolve(__dirname, "../../.env"))
console.log("MONGO_URI:", process.env.MONGO_URI)

const express = require("express")

const cors = require("cors")

const connectDB = require("./config/db")

const jiraRoutes = require("./routes/jiraRoutes")

const githubRoutes = require("./routes/githubRoutes")

const releaseRoutes = require("./routes/releaseRoutes")

const authRoutes = require("./routes/authRoutes")

const app = express()

const port = process.env.PORT || 4000

// MIDDLEWARE
app.use(cors())

app.use(express.json())

// ROUTES
app.use("/api/jira", jiraRoutes)

app.use("/api/github", githubRoutes)

app.use("/api/release", releaseRoutes)

app.use("/api/auth", authRoutes)

// DB
connectDB()

// TEST ROUTE
app.get("/", (req, res) => {

  res.json({
    message: "Backend running"
  })

})

// SERVER
app.listen(port, () => {

  console.log(`Server running on port ${port}`)

})