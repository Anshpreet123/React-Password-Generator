 import UserContextProvider from "./context/UserContextProvider.jsx"
import './App.css'
import Login from "./components/Login.jsx"
import Profile from "./components/Profile.jsx"

function App() {
 

  return (

    <UserContextProvider>
       <div>
        <h1>Hello Message !</h1>
        <Login/>
        <Profile/>
       
       </div>
    </UserContextProvider>
  )
}

export default App
