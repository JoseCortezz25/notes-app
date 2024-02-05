import { electronAPI } from '@electron-toolkit/preload';
import { contextBridge } from 'electron';

if (!process.contextIsolated) {
  throw new Error('This preload script should be used with contextIsolation enabled');
}

try {
  contextBridge.exposeInMainWorld('context', electronAPI);
  //todo
} catch (error) {
  console.log('error', error);
}
