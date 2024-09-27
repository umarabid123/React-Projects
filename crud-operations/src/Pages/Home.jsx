import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ dataItem, setDataItem }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    city: "",
    class: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const notifyDelete = () => {
    toast.success("Record successfully deleted!", {
      position: "top-right",
      autoClose: 2000,
      transition: Zoom,
    });
  };

  const handleDeleteRecord = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      const updatedData = dataItem.filter((student) => student.id !== id);
      setDataItem(updatedData);
      notifyDelete();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedData = dataItem.map((student) =>
        student.id === formData.id ? { ...formData } : student
      );
      setDataItem(updatedData);
      toast.success("Student record updated!", { autoClose: 2000 });
    } else {
      const newRecord = {
        id: dataItem.length + 1,
        ...formData,
        address: { city: formData.city },
      };
      setDataItem([...dataItem, newRecord]);
      toast.success("New student record added!", { autoClose: 2000 });
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      age: "",
      email: "",
      city: "",
      class: "",
      phone: "",
    });
    setIsEditing(false);
  };

  const handleEdits = (student) => {
    setFormData({
      ...student,
      city: student.address ? student.address.city : "", // Safely access city from address
    });
    setIsEditing(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-bold text-white text-center py-4">
        Add Student Records
      </h1>

      {/* Form Section */}
      <form
        className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">
          {isEditing ? "Edit Student" : "Add New Student"}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Form fields */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Age</label>
            <input
              type="number"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">City</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Class</label>
            <select
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.class}
              onChange={(e) => setFormData({ ...formData, class: e.target.value })}
              required
            >
              <option value="">Select Class</option>
              <option value="10th Grade">10th Grade</option>
              <option value="12th Grade">12th Grade</option>
              <option value="BSCS">BSCS</option>
              <option value="BS English">BS English</option>
              <option value="BS Physics">BS Physics</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">Phone</label>
            <input
              type="tel"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            {isEditing ? "Update" : "Submit"}
          </button>
          <button
            type="reset"
            className="bg-gray-400 text-white py-2 px-6 rounded-lg hover:bg-gray-500"
            onClick={resetForm}
          >
            Reset
          </button>
        </div>
      </form>

      {/* Table Section */}
      <h1 className="text-4xl font-bold text-white text-center py-4">
        Student Records
      </h1>
      <table className="min-w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Age</th>
            <th className="p-4">Email</th>
            <th className="p-4">City</th>
            <th className="p-4">Class</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {dataItem.map((student) => (
            <tr key={student.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.age}</td>
              <td className="border px-4 py-2">{student.email}</td>
              <td className="border px-4 py-2">
                {student.address?.city || "N/A"}
              </td>
              <td className="border px-4 py-2">{student.class}</td>
              <td className="border px-4 py-2">{student.phone}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white font-semibold text-sm py-2 px-4 rounded-lg mr-2"
                  onClick={() => handleEdits(student)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded-lg text-sm"
                  onClick={() => handleDeleteRecord(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default Home;



