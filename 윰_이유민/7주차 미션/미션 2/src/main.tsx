import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { LoginContextProvider } from './context/LoginContext.js';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </StrictMode>
  );
}
