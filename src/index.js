import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {
  faArrowLeft,
  faGlobe,
  faTrash,
  faTimes,
  faPlus,
  faMinus,
  faAngleDown,
  faShare,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faPlus,
  faGlobe,
  faMinus,
  faTrash,
  faTimes,
  faArrowLeft,
  faAngleDown,
  faShare,
  faEnvelope
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
