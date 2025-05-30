const { contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAuth', {
  login: (data) => ipcRenderer.invoke('auth:login', data),
  register: (data) => ipcRenderer.invoke('auth:register', data),
})