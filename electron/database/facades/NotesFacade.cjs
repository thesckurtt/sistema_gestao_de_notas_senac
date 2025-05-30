const db = require('../knex.cjs')

class NotesFacade {
  async getAllNotes({ user_id }) {
    try {
      const notes = await db('notes').where('user_id', user_id).orderBy('created_at', 'desc')
      return notes || []
    }  catch (error) {
      return { error: true, message: `[NotesFacade]: ${error.message || 'Unexpected error'}` }
    }
  }
}