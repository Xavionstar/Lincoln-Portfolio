import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter} from 'react-router-dom';

// this is the root file. It will render the app component and the react router dom
//by wrapping the app component in the react router dom, the app component will be able to use the react router dom to render the different pages
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
