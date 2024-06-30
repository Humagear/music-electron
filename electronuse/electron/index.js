import { app, BrowserWindow } from 'electron';
import { join } from 'path'
// const { ipcMain } = require('electron');
// const { BrowserWindow } = require('electron');

// let win = new BrowserWindow({ /* 配置项 */ });
// win.loadURL('http://localhost:5173');
//
// ipcMain.on('refresh-page', () => {
//     win.webContents.reload();
// });
const createdWindow = () => {
    const win = new BrowserWindow({
        width:1280,
        height:768,
        webPreferences: {
            nodeIntegration: true,
            enableBlinkFeatures: 'AllowInsecureLocalhost',
            contextIsolation:false,
            enableMenuBar: false
        }
    })

    // eslint-disable-next-line no-undef
    if(process.env.NODE_ENV !=='development'){
        // eslint-disable-next-line no-undef
        win.loadFile(join(__dirname,'../dist/index.html'))
    }else {
        // eslint-disable-next-line no-undef
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
    }
}



app.whenReady().then(createdWindow)
