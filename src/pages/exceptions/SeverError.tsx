import '@/assets/scss/pages/_error.scss'

import { Link } from 'react-router-dom'

function ServerError() {
  return (
    <div className="exception h-screen justify-center">
      <center className="mt-6">
        <Link
          to="/"
          className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">
          Go back
        </Link>
      </center>
    </div>
  )
}

export default ServerError
