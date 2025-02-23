import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import Login from './Login.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from '../../node_modules/react-bootstrap/esm/Row';
import Col from '../../node_modules/react-bootstrap/esm/Col';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
