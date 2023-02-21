import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

import DefaultLayout from '@/layouts/Default'
import RouteList from '@/share/router'

function App() {
  return (
    <Router>
      <RouteList
        path="/"
        layout={<DefaultLayout />}
      />
    </Router>
  )
}

export default App
