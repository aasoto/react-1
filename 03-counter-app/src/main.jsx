import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import HelloWorldApp from './HelloWorld';
import { PropsApp } from './PropsApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PropsApp title="Probando PropTypes" subTitle='Esto es un subtítulo'/>
    {/* <CounterApp value={4} /> */}
  </React.StrictMode>
);