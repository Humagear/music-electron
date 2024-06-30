import { app, BrowserWindow } from "electron";
import { join } from "path";
const createdWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      enableBlinkFeatures: "AllowInsecureLocalhost",
      contextIsolation: false,
      enableMenuBar: false
    }
  });
  if (process.env.NODE_ENV !== "development") {
    win.loadFile(join(__dirname, "../dist/index.html"));
  } else {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  }
};
app.whenReady().then(createdWindow);
