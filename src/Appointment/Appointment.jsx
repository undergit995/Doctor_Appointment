import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import doctorImg from '../assets/doc752.png';

export default function Appointment() {
  const [appoint, setAppoint] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newAppt = {
      id: uuidv4(), 
      title: title,
      date: date, 
      day: new Date(date).getDay(), 
      isStar: false,
    };
    setAppoint((prev) => [...prev, newAppt]);
    setTitle(""); 
    setDate("");
  }

  function toggleStar(id) {
    setAppoint((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, isStar: !appt.isStar } : appt
      )
    );
  }

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-400 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Appointment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
                  placeholder="Enter appointment title"
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700  mb-1">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-black p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200"
              >
                Add Appointment
              </button>
            </form>
          </div>
          
          <div className="lg:w-96 flex-shrink-0">
            <img 
              src={doctorImg} 
              alt="Doctor" 
              className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <hr className="my-12 border-gray-200" />

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointments</h2>
          <div className="space-y-4">
            {appoint.map((appt) => (
              <div
                key={appt.id}
                className="flex justify-between items-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                <div>
                  <h5 className="text-lg font-semibold text-gray-900">{appt.title}</h5>
                  <p className="text-gray-600 mt-1">
                    Date: {appt.date} ({dayNames[appt.day]})
                  </p>
                </div>
                <button
                  onClick={() => toggleStar(appt.id)}
                  className="p-2 rounded-full hover:bg-purple-100 transition-colors duration-200"
                  aria-label="Toggle star"
                >
                  <span className="text-2xl">{appt.isStar ? "⭐" : "☆"}</span>
                </button>
              </div>
            ))}
          </div>
          {appoint.length === 0 && (
            <p className="text-gray-500 text-center py-12">No appointments yet. Add one above!</p>
          )}
        </div>
      </div>
    </div>
  );
}
