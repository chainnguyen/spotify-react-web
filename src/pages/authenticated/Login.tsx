import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import type { ICredentials } from '@/@types/views/auth'
import { AuthService } from '@/services/auth.service'
import type { AppDispatch } from '@/shared/store'
import { SET_LOGIN } from '@/shared/store/modules/auth'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const [formLogin, setFormLogin] = useState<ICredentials>({
    email: '',
    password: '',
  })

  const handleSubmit = async () => {
    try {
      await AuthService.login(formLogin).then((res) => {
        dispatch(SET_LOGIN({ token: res.data.bearer_token }))
        navigate('/')
      })
    } catch (err) {
      // handle err
    }
  }

  return (
    <div>
      <h1>Login page</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}>
        Click for login
      </button>
    </div>
  )
}

export default Login
