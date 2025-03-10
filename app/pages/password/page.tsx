"use client";
import { useState, useEffect } from "react";
import "../global.css";
import { handleAddData } from "./password";

export default function Password() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState("");

  const toggleFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsSortOpen(false);
  };
  
  const toggleSortOpen = () => {
    setIsSortOpen(!isSortOpen);
    setIsFilterOpen(false);
  };



  const [data, setData] = useState([
    { platform: "Facebook", username: "johndoe", password: "password" },
    { platform: "Instagram", username: "janedoe", password: "password" },
    { platform: "Thread", username: "johndoe", password: "password" },
    { platform: "Facebook", username: "johndoe", password: "password" },
    { platform: "Instagram", username: "janedoe", password: "password" },
    { platform: "Thread", username: "johndoe", password: "password" },
    { platform: "Facebook", username: "johndoe", password: "password" },
    { platform: "Instagram", username: "janedoe", password: "password" },
    { platform: "Thread", username: "johndoe", password: "password" },
    { platform: "Facebook", username: "johndoe", password: "password" },
    { platform: "Instagram", username: "janedoe", password: "password" },
    { platform: "Thread", username: "johndoe", password: "password" },
    { platform: "Facebook", username: "johndoe", password: "password" },
    { platform: "Instagram", username: "janedoe", password: "password" },
    { platform: "Thread", username: "johndoe", password: "password" },
    { platform: "Facebook", username: "johndoe", password: "password" },
    { platform: "Instagram", username: "janedoe", password: "password" },
    { platform: "Thread", username: "johndoe", password: "password" },
    { platform: "Facebook", username: "johndoe", password: "password" },
    { platform: "Instagram", username: "janedoe", password: "password" },
    { platform: "Thread", username: "johndoe", password: "password" },
    { platform: "Facebook", username: "johndoe", password: "password" },
    { platform: "Instagram", username: "janedoe", password: "password" },
    { platform: "Thread", username: "johndoe", password: "password" },
 
  ]);

  return (
    <div className="ContentContainer w-full" suppressHydrationWarning>
      <div className="Toolbar w-full h-auto flex items-center justify-between pl-8 pr-12 py-1">
        <div className="FunctionContainer w-4/5 pt-3 flex justify-start items-center gap-20">
          {!isSortOpen && (
            <div className="relative inline-flex justify-start w-auto h-auto">
              <button onClick={toggleFilterOpen} className="FilterBtn w-auto h-auto pl-3 py-0.5 text-sm flex justify-center items-center relative">
                Filter
                <div className={`w-fit h-auto transition-transform duration-500 ${isFilterOpen ? '-rotate-90 mt-0.5' : ''}`}>
                  <span className="triangle w-fit h-fit px-2">
                    ▼
                  </span>
                </div>
              </button>
              {isFilterOpen && (
                <div className="OptionContainer w-auto h-auto text-center text-xs flex justify-around items-center flex-row px-1 pt-0.5 border-gray-500W gap-8">
                  <button onClick={() => { setSelectedFunction('Newest'); setIsFilterOpen(false); }}>Newest</button>
                  <button onClick={() => { setSelectedFunction('Oldest'); setIsFilterOpen(false); }}>Oldest</button>
                  <button onClick={() => { setSelectedFunction('A to Z'); setIsFilterOpen(false); }}>A → Z</button>
                  <button onClick={() => { setSelectedFunction('Z to A'); setIsFilterOpen(false); }}>Z → A</button>
                  <button onClick={toggleFilterOpen} className="ml-auto text-orange-500">X</button>
                </div>
              )}
            </div>
          )}
          {!isFilterOpen && (
            <div className="relative inline-flex justify-start w-auto h-aut transition-transform duration-700">
              <button onClick={toggleSortOpen} className="SortBtn w-auto h-auto pl-3 py-0.5 text-sm flex justify-center items-center relative">
                Sort
                <div className={`w-fit h-auto  transition-transform duration-500 ${isSortOpen ? '-rotate-90 mt-0.5' : ''}`}>
                  <span className="triangle w-fit h-fit px-2">
                    ▼
                  </span>
                </div>
              </button>
              {isSortOpen && (
                <div className="OptionContainer w-auto h-auto text-xs overflow-x-auto rounded-full  flex justify-around items-center flex-row px-1 pt-0.5  border-gray-500W gap-8">
                    <button onClick={() => { setSelectedFunction('Facebook'); setIsSortOpen(false); }}>Facebook</button>
                    <button onClick={() => { setSelectedFunction('Instagram'); setIsSortOpen(false); }}>Instagram</button>
                    <button onClick={() => { setSelectedFunction('Thread'); setIsSortOpen(false); }}>Thread</button>
                    <button onClick={toggleSortOpen} className=" text-orange-500">X</button>
                </div>
              )}
            </div>
          )}
          {!isSortOpen && !isFilterOpen && (
              <div className="SearchContainer w-1/3 h-auto flex justify-start items-center border-orange-500 border-b-2">
                <form className="SearchForm w-full h-full flex justify-between items-center" action="#">
                  <input className="focus:outline-none w-5/6 bg-transparent placeholder-gray-600 font-thin" type="text" placeholder="Search.." name="search" />
                  <button type="submit"><i className="fa fa-search text-black text-sm w-fit"></i></button>
                </form>
              </div>
          )}
        </div>
        <div className="flex justify-end items-center pt-2 ">
          <button className="AddBtn w-16 h-9 font-mono bg-transparent lg:text-sm text-gray-600 hover:text-zinc-800 min-w-fit rounded-full flex items-center justify-center" type="submit" id="addBtn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add
          </button>
        </div>
      </div>
      <div className="TableContainer flex flex-col w-full px-10 mt-3 justify-self-center items-center justify-center">
        <div className="SubContainer w-full h-full flex-grow overflow-y-auto border-4 border-gray-500 rounded-lg mt-5">
          <table className="Table h-full w-full border-collapse" id="table">
            <thead className="TableHead h-10">
              <tr className="text-sm">
                <th className="sticky top-0 TableHeadCell w-1/4 h-full text-center bg-zinc-300">Platform</th>
                <th className="sticky top-0 TableHeadCell w-1/4 h-full text-center bg-zinc-300">Username</th>
                <th className="sticky top-0 TableHeadCell w-1/4 h-full text-center bg-zinc-300">Password</th>
                <th className="sticky top-0 TableHeadCell w-1/4 h-full text-center bg-zinc-300">Edit</th>
              </tr>
            </thead>

            <tbody className="TableBody bg-transparent divide-y" id="tableBody">
                {/* {data.map((item, index) => ( */}
                {/* //   <tr key={index} className="TableRow w-full h-10 text-xs border border-black">
                //     <td className="TableCell w-1/4 h-full text-center border border-black">{item.platform}</td>
                //     <td className="TableCell w-1/4 h-full text-center border border-black ">{item.username}</td>
                //     <td className="TableCell w-1/4 h-full text-center border border-black">{item.password}</td>
                //     <td className="TableCell w-1/4 h-full text-center border border-black">
                //       <button className="EditBtn w-full h-9 font-mono bg-transparent lg:text-sm text-gray-600 hover:text-zinc-800 min-w-fit rounded-full flex items-center justify-center" type="submit">
                //         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0-7h7m-7-7V2m0 7H5m7 0V5" />
                //         </svg>
                //         Edit
                //       </button>
                //     </td>
                //   </tr>
                // ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
