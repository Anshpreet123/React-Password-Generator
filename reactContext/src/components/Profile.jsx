import React , {useContext , useState } from 'react'
import { userContext } from '../context/user.context'

function Profile() {

      const {user} = useContext(userContext)
      if (!user)return <div>Please Login</div>

      return <div>Welcome  {user.username+ user.password}</div>

   
}

export default Profile