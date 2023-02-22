import { BrowserRouter as Router } from 'react-router-dom'

import DefaultLayout from '@/layouts/Default'
import RouteList from '@/share/router'

function App() {
  return (
    <div className="Root">
      <Router>
        <RouteList
          path="/"
          layout={<DefaultLayout />}
        />
      </Router>
    </div>
  )
}

export default App
