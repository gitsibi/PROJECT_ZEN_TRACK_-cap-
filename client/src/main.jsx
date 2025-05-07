import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "1059788612727-0elt34nr48v5aa452qj0kj82bk3akfd6.apps.googleusercontent.com";
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>

  //  </StrictMode> 
)
