import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

// import { App } from './HelloWordApp'
import './styles.css'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title='Test App'/>
    </React.StrictMode>
);