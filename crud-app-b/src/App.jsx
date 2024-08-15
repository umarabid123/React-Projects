import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header_Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app bg-[#f7f7f7] h-[100vh]">
      <h1 className="text-7xl text-sky-500 text-center pt-6 mb-10">CRUD APP</h1>
      <Header />
      <div className="border-b px-6 bg-white">
        <table className="max-w-[100%] w-full mx-auto">
          <thead className="">
            <tr className="flex justify-between items-center w-full text-center max-w-[100%] hover:bg-gray-100">
              <td className="text-xl h-12 w-[16%] font-bold text-sky-500">
                Sr.No
              </td>
              <td className="text-xl h-12  w-[8%] font-bold text-sky-500">
                Id
              </td>
              <td className="text-xl h-12 w-[13%] font-bold text-sky-500">
                First Name
              </td>
              <td className="text-xl h-12 w-[13%] font-bold text-sky-500">
                Last Name
              </td>
              <td className="text-xl h-12 w-[12%] font-bold text-sky-500">
                Age
              </td>
              <td className="text-xl h-12 w-[15%] font-bold text-sky-500">
                Action
              </td>
              {/* <button className="bg-sky-500 m-2 text-white p-2 w-24 rounded-lg hover:bg-white hover:border hover:text-sky-500 hover:border-sky-500 transition-all duration-500 text-xl">
              Save
            </button>
            <button className="bg-red-500 m-2 text-white p-2 w-24 rounded-lg hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-500 text-xl">
              Clear
            </button> */}
            </tr>
          </thead>
          <tbody className="w-[90%]">
           
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default App
