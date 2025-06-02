const { app, BrowserWindow, ipcMain, Menu } = require('electron')
const path = require('node:path')
let mainWindow = null
const AuthFacade = require('./database/facades/AuthFacade.cjs')
const NotesFacade = require('./database/facades/NotesFacade.cjs')
const dotenv = require('dotenv')
dotenv.config({ path: path.join(__dirname, '../.env') })

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs')
    }
  })

  mainWindow.setMenu(null)
  if (process.env.APP_DEBUG === "true") {
    const template = [
      {
        label: 'React',
        submenu: [
          { role: 'reload', label: 'Recarregar' },
          { role: 'forcereload', label: 'Forçar Recarregamento' },
          { type: 'separator' },
          { role: 'back', label: 'Voltar' },
          { role: 'forward', label: 'Avançar' },
          { type: 'separator' },
          { role: 'quit', label: 'Sair' },
          { type: 'separator' },
          { role: 'toggledevtools', label: 'Ferramentas de Desenvolvedor' }
        ]
      }
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  }
  mainWindow.loadURL('http://localhost:5173')
}

// Auth IPC Handlers
ipcMain.handle('auth:login', async (_, user) => {
  return await AuthFacade.login(user)
})

ipcMain.handle('auth:register', async (_, user) => {
  return await AuthFacade.register(user)
})

// Notes IPC Handlers
ipcMain.handle('notes:getAll', async (_, { user_id }) => {
  return await NotesFacade.getAllNotes({ user_id })
})
ipcMain.handle('notes:create', async (_, { user_id, title, content }) => {
  return await NotesFacade.createNote({ user_id, title, content })
})
ipcMain.handle('notes:update', async (_, { user_id, note_id, data }) => {
  return await NotesFacade.updateNote({ user_id, note_id, data })
})

app.whenReady().then(createMainWindow)