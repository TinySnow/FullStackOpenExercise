import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import App_1 from './App_1'
import App_2 from './App_2'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
ReactDOM.createRoot(document.getElementById('one')).render(<App_1 />)
ReactDOM.createRoot(document.getElementById('two')).render(<App_2 />)