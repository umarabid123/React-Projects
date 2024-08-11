import "./App.css";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header_Input";

function App() {
  return (
    <div className="app bg-[#f7f7f7] h-[100vh]">
      <h1 className="text-7xl text-sky-500 text-center pt-6 mb-10">CRUD APP</h1>
      <Header />
      <Card />
    </div>
  );
}

export default App;
