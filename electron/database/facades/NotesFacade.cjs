const db = require('../knex.cjs')

class NotesFacade {
  static errorHandler(error) {
    return { error: true, message: `[NotesFacade]: ${error.message || 'Unexpected error'}` }
  }

  static async getAllNotes({ user_id }) {
    try {
      const notes = await db('notes').where('user_id', user_id).orderBy('created_at', 'desc')
      if (notes.length > 0) {
        return { error: false, notes }
      }
      else if (notes.length === 0) {
        return { error: false, message: 'No notes found for this user' }
      }
      return { error: true, message: 'Error fetching notes' }
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
        return { error: false, message: 'Note created successfully', note_id: newNote, note: await db('notes').where({ id: newNote }).first() }
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
// NotesFacade.getAllNotes({ user_id: 53 }).then((result) => console.log(result))
module.exports = NotesFacade

