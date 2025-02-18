"use client";
import { useState } from "react";
import "../global.css";
export default function Password() {
  const [selectedFunction, setSelectedFunction] = useState("Passwords , Checker , About");
  const [index , setIndex] = useState(0);
  
  return (
    <div className="min-w-full" style={{widows:"100vw" ,height:"fit-content"}}>
            <div className="AddBtnContainer w-full h-auto flex items-center justify-end py-4 px-14">
              <button className="AddBtn w-20 h-10 bg-gray-200 border-2 lg:text-sm border-gray-300 text-gray-500 hover:text-zinc-800 min-w-fit rounded-full flex items-center justify-center" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add
              </button>
            </div>
            <div className="TableContainer min-w-full bg-green-200" style={{height:"78vh"}}>
              <table className="PasswordTable w-full min-h-full border-2 border-gray-500 overflow-auto">
                <thead className="TableHead w-full h-10 flex items-center">
                  <tr className="TableHeadRow w-full h-10 row-auto flex items-center justify-around">
                    <th>Platform</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody className="TableBody" id="tablebody"></tbody>
              </table>
            </div>
    </div>
  );
}
