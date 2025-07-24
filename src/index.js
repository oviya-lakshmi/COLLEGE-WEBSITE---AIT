import { StrictMode } from 'react';  // Add this import
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/styles/carousel.css';
import './index.css';
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>  {/* Now properly imported */}
    <App />
  </StrictMode>
);