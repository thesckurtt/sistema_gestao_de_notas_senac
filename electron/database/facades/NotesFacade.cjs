const db = require('../knex.cjs')

class NotesFacade {
  static errorHandler(error) {
    return { error: true, message: `[NotesFacade]: ${error.message || 'Unexpected error'}` }
  }

  static async getAllNotes({ user_id }) {
    try {
      const notes = await db('notes').where('user_id', user_id).orderBy('created_at', 'desc')
      return notes || []
    } catch (error) {
      return this.errorHandler(error)
    }
  }

  static async deleteNote({ note_id, user_id }) {
    try {
      const result = await db('notes').where({ id: note_id, user_id }).del()
      console.log('result: ', result)
      if (result === 1) {
        return { error: false, message: 'Note deleted successfully' }
      }
      return { error: true, message: 'Note not found or already deleted' }
    } catch (error) {
      return this.errorHandler(error)
    }
  }

  static async createNote({ user_id, title, content }) {
    try {
      const [newNote] = await db('notes').insert({ user_id, title, content })
      if (newNote) {
        return { error: false, message: 'Note created successfully', note_id: newNote }
      }
      return { error: true, message: 'Note not created' }
    } catch (error) {
      return this.errorHandler(error)
    }
  }

  static async updateNote({ note_id, user_id, title, content }) {
    try {
      const result = await db('notes')
        .where({ id: note_id, user_id })
        .update({ title, content })

      if (result === 1) {
        return { error: false, message: 'Note updated successfully' }
      }
      return { error: true, message: 'Note not found or not updated' }
    } catch (error) {
      return this.errorHandler(error)
    }
  }
}

module.exports = NotesFacade

