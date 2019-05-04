import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'assets/css/reset.css'
import 'assets/css/base.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
