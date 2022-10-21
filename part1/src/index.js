import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import App_1 from './App_1'
import App_2 from './App_2'
import App_3 from './App_3'
import App_4 from './App_4'
import App_5 from './App_5'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
ReactDOM.createRoot(document.getElementById('one')).render(<App_1 />)
ReactDOM.createRoot(document.getElementById('two')).render(<App_2 />)
ReactDOM.createRoot(document.getElementById('three')).render(<App_3 />)
ReactDOM.createRoot(document.getElementById('four')).render(<App_4 />)
ReactDOM.createRoot(document.getElementById('five')).render(<App_5 />)