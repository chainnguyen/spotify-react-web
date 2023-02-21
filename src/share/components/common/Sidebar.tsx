import { Link } from 'react-router-dom'

// import { SIDEBAR } from '@/enums/sidebar.enum'

function Sidebar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/library">Library</Link>
    </nav>
  )
}

export default Sidebar
