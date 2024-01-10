import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp></HelloWorldApp> */}
        {/* <FirstApp title="Hola soy Goku" subtitle={123}></FirstApp> */}
        <CounterApp value={20}></CounterApp>
        {/* <FirstApp title="Hola soy Vegeta"></FirstApp> */}
    </React.StrictMode>
);