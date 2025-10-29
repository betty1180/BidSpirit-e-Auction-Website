import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; //Import for App component
import { BrowserRouter as Router } from 'react-router-dom'; //Import for page router
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
        <App />  {/*App component */}
        </Router>
    </React.StrictMode>
);
