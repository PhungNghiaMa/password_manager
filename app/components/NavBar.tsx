"use client";
import Link from "next/link";
export default function NavBar() {
// const [selectedFunction, setSelectedFunction] = useState("Passwords , Checker , About");
// const [index , setIndex] = useState(0);
  return (
    <div className="h-auto min-w-full" style={{widows:"100vw"}}>
        <nav className="h-auto w-full flex justify-between items-center border border-b border-gray-500">
            {/* Logo */}
            <a href="http://localhost:3000/login" className="Logo font-serif text-xl text-start text-gray-700 md:text-2xl  font-semibold lg:pl-8 lg:text-3xl" style={{fontKerning:"auto" , fontStyle:"italic"}}>Cylockr</a>
            {/* Function */}
            <nav className="FunctionContainer w-1/2 lg:w-1/3 h-auto flex items-center justify-around bg-gray-300 rounded-full py-3 my-2 border-2 border-gray-700 ">
                <Link href="./pages/dashboard" className="Function text-gray-600 text-sm  sm:text-base md:text-base font-serif">Dashboard</Link>
                <Link href="./pages/password" className="Function text-gray-600 text-sm sm:text-base md:text-base font-serif">Passwords</Link>
                <Link  href="./pages/checker" className="Function text-gray-600 text-sm sm:text-base md:text-base font-serif">Checker</Link>
            </nav>
            {/* Account Button */}
            <button className="Account bg-orange-500  text-white h-4 w-4 md:h-7 md:w-7 rounded-full flex items-center justify-center text-sm md:text-xs lg:mr-16">
                PN
            </button>
        </nav>
    </div>
  );
}
