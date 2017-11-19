import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Login';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './styles/semantic.min.css';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render((
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  ), document.getElementById('root'))

