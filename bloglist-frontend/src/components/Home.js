import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const user = useSelector((state) => state.userLogged)
  return (
    <div>
      <h1><center>Welcome</center></h1>
      {
        user ? <p>Add and discuss any blogs that you want to share with other.</p>
          : <p>Please, login or signup if you don&apos;t have an account. Otherwise, you are not allowed to publish or discuss blogs. </p>
      }
    </div>
  )
}

export default Home