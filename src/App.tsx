import { BrowserRouter as Router } from 'react-router-dom'

import DefaultLayout from '@/layouts/Default'
import RouteList from '@/share/router'

function App() {
  return (
    <div className="Root">
      <Router>
        <RouteList
          path={import.meta.env.VITE_ROUTER_BASE as string}
          layout={<DefaultLayout />}
        />
      </Router>
    </div>
  )
}

export default App
