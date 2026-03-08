import React, { useState } from "react";
import { v4 } from "uuid";

export default function Appointment() {
  const [appoint, setAppoint] = useState([]);
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [day, setDay] = useState();

  function name(e) {
    e.preventDefault();
    const transaction = {
      id: new Date(),
      title: title,
      date: new Date().getDate(),
      isStar: false,
    };
    setAppoint((prev) => [...prev, transaction]);
    setDay(new Date().getDay());    
  }

  function nameDel(params){
    setAppoint((p) =>
      p.map((e) => (e.id == params ? { ...e, isStar: !e.isStar } : e))
    );
  }
  return (
    <div className="min-w-screen min-h-full m-4">
      <div className="max-w-500 p-8 pt-20 pb-20 min-h-355 mx-auto bg-gradient-to-b from-pink-200 to-purple-400 shadow-[0_0_10px_rgba(2,1,4,0.2)]">
        <div className="min-w-800 mx-auto bg-white p-8 rounded">
          <div className="flex gap-14 p-5 justify-between">
            <div className="w-600 flex flex-col items-start h-auto">
              <h1 className="float-left w-500 font-bold text-2xl m-2 ml-0">
                Add Appointment
              </h1>
              <form className="flex flex-col items-start" onSubmit={name}>
                <label className="float-left " htmlFor="title">
                  TITLE
                </label>
                <br />
                <input
                  className="p-2 w-80 border-2"
                  id="title"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
                <br />
                <label className="float-left text-1" htmlFor="date">
                  DATE
                </label>
                <br />
                <input
                  className="p-2 w-80 border-2"
                  id="date"
                  type="date"
                  onInput={(e) => setDate(e.target.value)}
                />
                <br />
                <button
                  className="rounded bg-purple-600 text-white w-11 float-left"
                  id="button"
                >
                  Add
                </button>
                <br />
              </form>
            </div>
            <div className="w-400">
              <img src="doc752.png" alt="Error" height={300} width={400}></img>
            </div>
          </div>
          <hr />
          <div className="flex p-2 ml-3 flex-col items-start gap-3">
            <h2 className="font-bold">Appointments</h2>
            {appoint.map((e) => (
              <div className="rounded w-48 shadow-[0_0_6px_grey] flex justify-between">
                <div>
                  <h5 className="font-bold">{e.title}</h5>
                  <p>
                    Date:{e.date},{day==1?"Monday":day==2?"Tuesday":day==3?"Wednesday":day==4?"Thursday":day==5?"Friday":day==6?"Saturday":"Sunday"}
                  </p>
                </div>
                <button onClick={()=>nameDel(e.id)}>
                  <span>{e.isStar ? "⭐" : "☆"}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
