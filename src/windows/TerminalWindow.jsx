import React, { useState, useRef, useEffect } from 'react';
import { useWindow } from '../context/WindowContext';
import { fileSystem, getDirectory, resolvePath } from '../utils/fileSystem';
// Import windows for 'open' command
import HomeWindow from './HomeWindow';
import ProjectsWindow from './ProjectsWindow';
import SkillsWindow from './SkillsWindow';
import AboutWindow from './AboutWindow';
import LearningWindow from './LearningWindow';
import ExperienceWindow from './ExperienceWindow';
import ConnectWindow from './ConnectWindow';
import SettingsWindow from './SettingsWindow';
import ResumeWindow from './ResumeWindow';

const TerminalWindow = () => {
    const { openWindow } = useWindow();
    const [history, setHistory] = useState([
        { type: 'output', content: 'Microsoft Windows [Version 10.0.19045.3693]' },
        { type: 'output', content: '(c) Bat Corporation. Type help for more info.' },
        { type: 'output', content: '' },
    ]);
    const [currentPath, setCurrentPath] = useState('/home/user');
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const handleCommand = (cmd) => {
        const parts = cmd.trim().split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        let newHistory = [...history, { type: 'input', content: `${currentPath}> ${cmd}` }];

        switch (command) {
            case 'help':
                newHistory.push({ type: 'output', content: `
Available commands:
  help       Show this help message
  ver        Show OS version
  cls        Clear screen
  dir        List directory contents
  cd [dir]   Change directory
  type [file] Display file content
  start [app] Open application (e.g., start projects)
  whoami     Show current user
` });
                break;
            case 'ver':
                newHistory.push({ type: 'output', content: 'Microsoft Windows [Version 10.0.19045.3693]' });
                break;
            case 'cls':
            case 'clear':
                setHistory([]);
                return;
            case 'dir':
            case 'ls':
                const dir = getDirectory(resolvePath(currentPath, '.'));
                if (dir && dir.type === 'dir') {
                    const contents = Object.keys(dir.children).map(name => {
                        const item = dir.children[name];
                        const date = "02/02/2026  09:00 PM";
                        const type = item.type === 'dir' ? '<DIR>' : '     ';
                        
                        return `${date}    ${type}         ${name}`;
                    }).join('\n');
                    newHistory.push({ type: 'output', content: contents || '(empty directory)' });
                } else {
                    newHistory.push({ type: 'output', content: 'File Not Found' });
                }
                break;
            case 'cd':
                if (!args[0]) {
                     newHistory.push({ type: 'output', content: currentPath });
                } else {
                     const targetPath = resolvePath(currentPath, args[0]);
                     const targetDir = getDirectory(targetPath);
                     
                     if (targetDir && targetDir.type === 'dir') {
                         setCurrentPath('/' + targetPath.join('/'));
                     } else {
                         newHistory.push({ type: 'output', content: 'The system cannot find the path specified.' });
                     }
                }
                break;
            case 'type':
            case 'cat':
                if (!args[0]) {
                    newHistory.push({ type: 'output', content: 'The syntax of the command is incorrect.' });
                } else {
                    const targetPath = resolvePath(currentPath, args[0]);
                    const names = targetPath;
                    const fileName = names.pop();
                    const parentParts = names;
                    
                    const parentDir = getDirectory(parentParts);
                    
                    if (parentDir && parentDir.children[fileName] && parentDir.children[fileName].type === 'file') {
                        newHistory.push({ type: 'output', content: parentDir.children[fileName].content });
                    } else {
                        newHistory.push({ type: 'output', content: 'The system cannot find the file specified.' });
                    }
                }
                break;
            case 'start':
            case 'open':
                if (!args[0]) {
                     newHistory.push({ type: 'output', content: 'Specify an application to start.' });
                } else {
                    const appName = args[0].toLowerCase();
                    const appMap = {
                        'thispc': { id: 'home', title: 'This PC', component: <HomeWindow /> },
                        'home': { id: 'home', title: 'This PC', component: <HomeWindow /> },
                        'about': { id: 'about', title: 'About Me', component: <AboutWindow /> },
                        'skills': { id: 'skills', title: 'Skills', component: <SkillsWindow /> },
                        'projects': { id: 'projects', title: 'Projects', component: <ProjectsWindow /> },
                        'learning': { id: 'learning', title: 'Learning Journey', component: <LearningWindow /> },
                        'experience': { id: 'experience', title: 'Experience', component: <ExperienceWindow /> },
                        'connect': { id: 'connect', title: 'Connect', component: <ConnectWindow /> },
                        'settings': { id: 'settings', title: 'Settings', component: <SettingsWindow /> },
                        'resume': { id: 'resume', title: 'Resume', component: <ResumeWindow /> },
                    };

                    if (appMap[appName]) {
                        openWindow(appMap[appName].id, appMap[appName].title, appMap[appName].component);
                        newHistory.push({ type: 'output', content: `Starting ${appName}...` });
                    } else {
                        newHistory.push({ type: 'output', content: `Application '${appName}' not found.` });
                    }
                }
                break;
            case 'whoami':
                newHistory.push({ type: 'output', content: 'home\\visitor' });
                break;
            case '':
                break;
            default:
                newHistory.push({ type: 'output', content: `'${command}' is not recognized as an internal or external command, operable program or batch file.` });
        }

        setHistory(newHistory);
        setInput('');
    };

    return (
        <div className="h-full bg-black font-mono text-gray-300 p-2 overflow-y-auto text-sm" onClick={() => document.getElementById('terminal-input')?.focus()}>
            {history.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap mb-1">
                    {line.content}
                </div>
            ))}
            <div className="flex">
                <span className="mr-2">{currentPath.replace(/\//g, '\\')}</span>
                <span className="mr-1">&gt;</span>
                <input
                    id="terminal-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleCommand(input);
                        }
                    }}
                    className="flex-1 bg-transparent outline-none border-none text-gray-300"
                    autoFocus
                />
            </div>
            <div ref={bottomRef} />
        </div>
    );
};

export default TerminalWindow;
