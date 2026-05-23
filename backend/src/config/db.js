const mongoose = require("mongoose")

const connectDB = async () => {

  try {

    await mongoose.connect(
      process.env.MONGO_URI
    )

    console.log("MongoDB Connected")

    const userCollection = mongoose.connection.collection("users")
    const indexes = await userCollection.indexes()
    const usernameIndex = indexes.find(
      (index) => index.name === "username_1"
    )

    if (usernameIndex) {
      console.log("Dropping stale username index")
      await userCollection.dropIndex("username_1")
    }

  } catch (error) {

    console.log("DB ERROR:", error)

  }

}

module.exports = connectDB