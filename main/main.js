import {app , BrowserWindow} from 'electron';
import serve from 'electron-serve';
import path from 'path';
import { fileURLToPath } from 'url';


const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const appServe = app.isPackaged ? serve({directory: path.join(__dirname, '../out')}) : null;
const createWindow = async () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false, // set to false for security and proper behavior
            contextIsolation: true, // protect against prototype pollution
            enableRemoteModule: false, // turn off remote
            sandbox: true, // turn on the sandbox

        }
    });

    if (app.isPackaged){
        await appServe(window).then (() => {
            window.loadURL('app://-');
        });
    }else{
        await window.loadURL('http://localhost:3000/login');
        window.webContents.openDevTools();
        window.webContents.on("did-fail-load", (e , code , desc) =>{
            window.webContents.reloadIgnoringCache();
        });
    }
};

app.on("ready" , () =>{
    createWindow();
});

app.on("window-all-closed" , () =>{
    if (process.platform !== "darwin"){
        app.quit();
    }
});