import { useState } from "react";

const INPUT_CLASS = "w-full p-2 border rounded-lg outline-sky-500";
const LABEL_CLASS = "w-full md:w-[50%] lg:w-[32%] text-lg";
function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  return (
    <>
      {/* <Product /> */}
      <h1 className="text-6xl text-sky-500 text-center">Add Reacord</h1>
      <form className="flex justify-between flex-wrap p-6">
        <label className={LABEL_CLASS}>
          First Name <span className="text-sky-500 font-medium">*</span>
          <input
            type="text"
            className={INPUT_CLASS}
            name="First Name"
            placeholder="Enter your First Name"
          />
        </label>
        <label className={LABEL_CLASS}>
          Last Name <span className="text-sky-500 font-medium">*</span>
          <input
            type="text"
            className={INPUT_CLASS}
            name="Last Name"
            placeholder="Enter your Last Name"
          />
        </label>
        <label className={LABEL_CLASS}>
          Contact <span className="text-sky-500 font-medium">*</span>
          <input
            type="number"
            className={INPUT_CLASS}
            name="Contact"
            placeholder="Enter your Contact"
          />
        </label>
        <label className={LABEL_CLASS}>
          Email <span className="text-sky-500 font-medium">*</span>
          <input
            type="email"
            className={INPUT_CLASS}
            name="Email"
            placeholder="Enter your Email"
          />
        </label>
        <button className="px-2 h-14 my-2 hover:underline bg-cyan-500 font-semibold text-white rounded-lg">
          Add Record
        </button>
      </form>
    </>
  );
}

export default App;
