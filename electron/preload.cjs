const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAuth', {
  login: (data) => ipcRenderer.invoke('auth:login', data),
  register: (data) => ipcRenderer.invoke('auth:register', data),
})

contextBridge.exposeInMainWorld('electronNotesAPI', {
  getAllNotes: ({ user_id }) => ipcRenderer.invoke('notes:getAll', {  user_id }),
  getNoteById: ({ user_id, note_id }) => ipcRenderer.invoke('notes:getById', { data: { user_id, note_id } }),
  createNote: ({ user_id, data }) => ipcRenderer.invoke('notes:create', { data: { user_id, ...data } }),
  updateNote: ({ user_id, note_id, data }) => ipcRenderer.invoke('notes:update', { data: { user_id, note_id, ...data } }),
  deleteNote: ({ user_id, note_id }) => ipcRenderer.invoke('notes:delete', { data: { user_id, note_id } }),
})