import React from 'react'
import ReactDOM from 'react-dom/client'

import CourseInfoInit from './courseinfo/Init'
import App1 from './courseinfo/App1'
import App2 from './courseinfo/App2'
import App3 from './courseinfo/App3'
import App4 from './courseinfo/App4'
import App5 from './courseinfo/App5'
import UnicafeInit from './unicafe/Init'
import Unicafe1 from './unicafe/Unicafe1'

ReactDOM.createRoot(document.getElementById('course-info-init')).render(<CourseInfoInit />)
ReactDOM.createRoot(document.getElementById('one')).render(<App1 />)
ReactDOM.createRoot(document.getElementById('two')).render(<App2 />)
ReactDOM.createRoot(document.getElementById('three')).render(<App3 />)
ReactDOM.createRoot(document.getElementById('four')).render(<App4 />)
ReactDOM.createRoot(document.getElementById('five')).render(<App5 />)
ReactDOM.createRoot(document.getElementById('unicafe-init')).render(<UnicafeInit />)
ReactDOM.createRoot(document.getElementById('six')).render(<Unicafe1 />)