import React, { createContext, useContext, useState } from 'react';

const WindowContext = createContext();

export const useWindow = () => useContext(WindowContext);

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);



  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const minimizeWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w))
    );
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };



  const focusWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, zIndex: getNextZIndex(prev) } : w
      )
    );
    setActiveWindowId(id);
  };

  const [wallpaper, setWallpaper] = useState(localStorage.getItem('wallpaper_v2') || '/assets/wallpapers/bloom.svg');
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const toggleStartMenu = () => setStartMenuOpen((prev) => !prev);
  
  // Close start menu when clicking outside (handled via desktop click) or opening a window
  const openWindow = (id, title, component) => {
    setStartMenuOpen(false);
    setWindows((prev) => {
      // ... existing logic ...
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        if (existing.minimized) {
          return prev.map((w) =>
            w.id === id ? { ...w, minimized: false, zIndex: getNextZIndex(prev) } : w
          );
        }
        setActiveWindowId(id);
        return prev.map((w) =>
            w.id === id ? { ...w, zIndex: getNextZIndex(prev) } : w
        );
      }
      return [...prev, { id, title, component, minimized: false, maximized: false, zIndex: getNextZIndex(prev) }];
    });
    setActiveWindowId(id);
  };

  const changeWallpaper = (path) => {
    setWallpaper(path);
    localStorage.setItem('wallpaper_v2', path);
  };

  const toggleMaximize = (id) => {
    setWindows((prev) => 
      prev.map((w) => w.id === id ? { ...w, maximized: !w.maximized } : w)
    );
    setActiveWindowId(id);
  };

  const restoreWindow = (id) => {
      setWindows((prev) =>
        prev.map((w) =>
          w.id === id ? { ...w, minimized: false, zIndex: getNextZIndex(prev) } : w
        )
      );
      setActiveWindowId(id);
  };

  const getNextZIndex = (currentWindows) => {
    const maxZ = Math.max(...currentWindows.map((w) => w.zIndex || 0), 10);
    return maxZ + 1;
  };

  return (
    <WindowContext.Provider
      value={{
        windows,
        activeWindowId,
        openWindow,
        closeWindow,
        minimizeWindow,
        restoreWindow,
        focusWindow,
        toggleMaximize,
        wallpaper,
        changeWallpaper,
        startMenuOpen,
        toggleStartMenu,
        setStartMenuOpen
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};
