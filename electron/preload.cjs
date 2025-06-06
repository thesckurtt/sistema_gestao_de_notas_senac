const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAuth', {
  login: (data) => ipcRenderer.invoke('auth:login', data),
  register: (data) => ipcRenderer.invoke('auth:register', data),
})

contextBridge.exposeInMainWorld('electronNotesAPI', {
  getAllNotes: ({ user_id }) => ipcRenderer.invoke('notes:getAll', { user_id }),
  getNoteById: ({ user_id, note_id }) => ipcRenderer.invoke('notes:getById', { data: { user_id, note_id } }),
  createNote: ({ user_id, title, content }) => ipcRenderer.invoke('notes:create', { user_id, title, content }),
  updateNote: ({ user_id, note_id, data }) => ipcRenderer.invoke('notes:update', {user_id, note_id, data }),
  deleteNote: ({ user_id, note_id }) => ipcRenderer.invoke('notes:delete', { user_id, note_id }),
})