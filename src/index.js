import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

// const element = React.createElement('h1', {
//   className: 'my-class',
// }, 'my first page')

// const element = () => {
//   return <div>My First Page</div>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element())

// const Element = () => {
//   return <div>My First Page</div>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


