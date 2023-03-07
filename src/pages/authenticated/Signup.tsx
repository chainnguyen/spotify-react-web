import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import type { IRegistration } from '@/@types/views/auth'
import { AuthService } from '@/services/auth.service'
import type { AppDispatch } from '@/shared/store'
import { SET_LOGIN } from '@/shared/store/modules/auth'

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const [formSignup, setFormSignup] = useState<IRegistration>({
    email: '',
    password: '',
    profile_name: '',
    gender: null,
  })

  const handleSubmit = async () => {
    try {
      await AuthService.signup(formSignup).then((res) => {
        dispatch(SET_LOGIN({ token: res.data.bearer_token }))
        navigate('/')
      })
    } catch (err) {
      // handle err
    }
  }

  return (
    <div>
      <h1>Signup page</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}>
        Click for signup
      </button>
    </div>
  )
}

export default Signup
