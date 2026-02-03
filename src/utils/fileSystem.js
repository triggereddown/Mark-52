export const fileSystem = {
  "/": {
    type: "dir",
    children: {
      "home": {
        type: "dir",
        children: {
          "user": {
            type: "dir",
            children: {
              "projects": {
                type: "dir",
                children: {
                  "project-alpha.txt": { type: "file", content: "Project Alpha: Full stack e-commerce..." },
                  "task-master.txt": { type: "file", content: "Task Master: WebSocket based task manager..." }
                }
              },
              "skills.txt": { type: "file", content: "Frontend: React, Tailwind\nBackend: Node, Mongo\nTools: Docker, Git" },
              "about.md": { type: "file", content: "# About Me\nFull Stack Developer student..." },
              "contact.info": { type: "file", content: "Email: deepmoitra2@gmail.com\nPhone: 7319824670" }
            }
          }
        }
      }
    }
  }
};

export const resolvePath = (currentPath, targetPath) => {
  if (targetPath.startsWith('/')) {
    return targetPath.split('/').filter(Boolean);
  }
  
  const parts = currentPath.split('/').filter(Boolean);
  const targets = targetPath.split('/').filter(Boolean);
  
  for (const part of targets) {
    if (part === '.') continue;
    if (part === '..') {
      parts.pop();
    } else {
      parts.push(part);
    }
  }
  
  return parts;
};

export const getDirectory = (pathParts) => {
  let current = fileSystem["/"];
  
  for (const part of pathParts) {
    if (current.type !== 'dir' || !current.children[part]) {
      return null;
    }
    current = current.children[part];
  }
  
  return current;
};
