const { ipcRenderer } = require('electron');

function openExplorer() {
  ipcRenderer.invoke('open-explorer');
}

// Bind the function to the button with the correct ID
document.getElementById('open-explorer').addEventListener('click', openExplorer);