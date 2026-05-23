const express = require("express")

const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

const User = require("../models/User")

const router = express.Router()

// SIGNUP
router.post("/signup", async (req, res) => {

  try {

    console.log(req.body)

    const {
      name,
      email,
      password
    } = req.body

    // CHECK EMPTY
    if (!name || !email || !password) {

      return res.status(400).json({
        message: "All fields are required"
      })

    }

    // CHECK EXISTING USER
    const existingUser =
      await User.findOne({ email })

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists"
      })

    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10)

    // CREATE USER
    await User.create({

      name,

      email,

      password: hashedPassword

    })

    res.json({
      message: "Signup successful"
    })

  } catch (error) {

    console.log("SIGNUP ERROR:", error)

    res.status(500).json({
      message: "Server Error"
    })

  }

})


// LOGIN
router.post("/login", async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body

    const user =
      await User.findOne({ email })

    if (!user) {

      return res.status(400).json({
        message: "Invalid credentials"
      })

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid credentials"
      })

    }

    const token = jwt.sign(

      {
        id: user._id
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    )

    res.json({

      token,

      user: {
        name: user.name,
        email: user.email
      }

    })

  } catch (error) {

    console.log("LOGIN ERROR:", error)

    res.status(500).json({
      message: "Server Error"
    })

  }

})

module.exports = router