import './App.css'
import Burger from './Components/Burger-2/Burger'
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
import Navbar from './Components/Navbar/Navbar'
import Promotion from './Components/Promotions/Promotion'

function App() {


  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Promotion />
      <Menu />
      <Burger/>
      {/* <BookTable/>
      <TestimonialSlider/>
      <Foooter/> */}
    </div>
  )
}

export default App
