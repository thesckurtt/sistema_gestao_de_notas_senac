const db = require('../knex.cjs')

class UserFacade {
  static async getUserByEmail(email) {
    try {
      const user = await db('users').where('email', email).first()
      return user || null;
    } catch (error) {
      return { error: true, message: `[UserFacade]: ${error.message || 'Unexpected error'}` }
    }
  }

  static async addUser({ name, email, hashedPassword }) {
    try {
      const result = await db('users').insert({ name, email, password: hashedPassword })

      if (result && result.length > 0) {
        return true
      } else {
        return false
      }
    } catch (error) {
      return { error: true, message: `[UserFacade]:  ${error.message || 'Unexpected error'}` }
    }
  }
}

// UserFacade.addUser({ name: "Andre", email: "teste2@gmaeil.com", hashedPassword: "$10$DBy3sXhhFxK2yqcx9SvMCuGu/63r2ZS7sjqD0jgi4LlPyu10KnaWa" }).then(res => console.log(res))
// UserFacade.getUserByEmail('Kevin44@yahoo.com').then(res => console.log(res))
module.exports = UserFacade