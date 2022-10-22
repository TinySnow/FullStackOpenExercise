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
import Unicafe2 from './unicafe/Unicafe2'
import Unicafe3 from './unicafe/Unicafe3'
import Unicafe4 from './unicafe/Unicafe4'
import Unicafe5 from './unicafe/Unicafe5'

ReactDOM.createRoot(document.getElementById('course-info-init')).render(<CourseInfoInit />)
ReactDOM.createRoot(document.getElementById('one')).render(<App1 />)
ReactDOM.createRoot(document.getElementById('two')).render(<App2 />)
ReactDOM.createRoot(document.getElementById('three')).render(<App3 />)
ReactDOM.createRoot(document.getElementById('four')).render(<App4 />)
ReactDOM.createRoot(document.getElementById('five')).render(<App5 />)
ReactDOM.createRoot(document.getElementById('unicafe-init')).render(<UnicafeInit />)
ReactDOM.createRoot(document.getElementById('six')).render(<Unicafe1 />)
ReactDOM.createRoot(document.getElementById('seven')).render(<Unicafe2 />)
ReactDOM.createRoot(document.getElementById('eight')).render(<Unicafe3 />)
ReactDOM.createRoot(document.getElementById('nine')).render(<Unicafe4 />)
ReactDOM.createRoot(document.getElementById('ten')).render(<Unicafe5 />)