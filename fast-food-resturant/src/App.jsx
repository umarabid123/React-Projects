import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Promotion from './Components/Promotions/Promotion'

function App() {


  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Promotion />
      {/* <Menu/>
      <Burger2/>
      <BookTable/>
      <TestimonialSlider/>
      <Foooter/> */}
    </div>
  )
}

export default App
