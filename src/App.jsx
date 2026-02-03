import React from 'react';
import { WindowProvider } from './context/WindowContext';
import Desktop from './components/Desktop';

function App() {
  return (
    <WindowProvider>
      <Desktop />
    </WindowProvider>
  );
}

export default App;
