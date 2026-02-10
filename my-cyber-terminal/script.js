const welcomeElement = document.getElementById('welcome-text');
const terminalOutput = document.getElementById('terminal-output');
const commandInput = document.getElementById('command-input');

// Системный монитор
setInterval(() => {
    const cpu = Math.floor(Math.random() * 100);
    const ram = Math.floor(Math.random() * 100);
    const disk = Math.floor(Math.random() * 100);

    document.getElementById('cpu').textContent = `CPU: ${cpu}%`;
    document.getElementById('ram').textContent = `RAM: ${ram}%`;
    document.getElementById('disk').textContent = `DISK: ${disk}%`;
}, 2000);

// Терминал
commandInput.focus();

commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = commandInput.value.trim();
        terminalOutput.innerHTML += `<div>> ${cmd}</div>`;
        
        if (cmd === 'help') {
            terminalOutput.innerHTML += `<div>Available: help, clear, sysinfo</div>`;
        } else if (cmd === 'sysinfo') {
            terminalOutput.innerHTML += `<div>CPU: 45%, RAM: 60%, DISK: 30%</div>`;
        } else if (cmd === 'clear') {
            terminalOutput.innerHTML = '';
        } else {
            terminalOutput.innerHTML += `<div>Command not found: ${cmd}</div>`;
        }

        commandInput.value = '';
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});
