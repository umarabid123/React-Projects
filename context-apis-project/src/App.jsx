import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
   <div className="app flex flex-col justify-center items-center bg-gray-950 h-[100vh] w-[100vw]">
     <UserContextProvider>
    <h1 className='text-7xl text-gray-600'>React with Chai and share is impotant</h1>
    <Login />
    <Profile />
    </UserContextProvider>
   </div>
  )
}

export default App
