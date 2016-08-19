import ReactDOM from 'react-dom';

// React package for constructing components (and all non-DOM related actions)
import React from 'react';
import MainView from './views/mainView.js';
import { Router, Route, Link } from 'react-router';

ReactDOM.render(<MainView />, document.getElementById('app'));