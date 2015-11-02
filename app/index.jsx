'use strict';

import './main.css';

import React from 'react';
import App from './components/App.jsx';

import 'array.prototype.findindex';

main();

function main() {
    let app = document.createElement('div');

    document.body.appendChild(app);
    React.render(<App />, app);
}
