import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'
import {TaskMain} from './TaskMain';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskMain />
  </StrictMode>,
)
