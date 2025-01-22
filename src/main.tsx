import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/main.css'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
