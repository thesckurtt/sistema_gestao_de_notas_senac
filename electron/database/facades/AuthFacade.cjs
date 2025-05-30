const UserFacade = require("./UserFacade.cjs")
const bcryptjs = require('bcryptjs')
const JWT = require('jsonwebtoken')
const path = require('node:path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

class AuthFacade {
  static async login({ email, password }) {
    try {
      const user = await UserFacade.getUserByEmail(email)

      if (!user) {
        return { error: true, message: 'User not found' }
      }
      const isValidPassword = await bcryptjs.compare(password, user.password)

      if (isValidPassword && user) {
        const token = JWT.sign({ user_id: 1, name: user.name }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        return { error: false, user: {name: user.name, email: user.email}, token: token }
      }

      return { error: true, message: "Invalid credentials" }

    } catch (error) {
      return { error: true, message: `[AuthFacade]: ${error.message || 'Unexpected error'}` }
    }
  }

  static async register({ name, email, password }) {
    try {
      const hashedPassword = await bcryptjs.hash(password, 10)
      const isRegistered = await UserFacade.addUser({ name, email, hashedPassword })
      if (isRegistered && !isRegistered?.error) {
        return { error: false, message: "User registered succesfully!" }
      }
      return { error: true, message: "User not registered!" }
    } catch (error) {
      return { error: true, message: `[AuthFacade]: ${error.message || 'Unexpected error!'}` }
    }
  }
}
// AuthFacade.register({name: "Joshuwe", email: "Josdhdduwe_Bernhard62@yahoo.com", password: "teste"}).then(res => console.log(res))
// AuthFacade.login({ email: "Gianni_Bernhard62@yahoo.com", password: "teste" }).then(res => console.log(res))
module.exports = AuthFacade