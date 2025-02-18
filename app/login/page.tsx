"use client";
import { useState, useEffect } from "react";

export default function Home({ keywords }: { keywords: string[] }) {
  // Set keywords 
  keywords = ["Secure", "Private", "Reliable", "Experience true piece of mind"];    
  const [currentWord, setCurrentWord] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [index, setIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(180);
  const [animationFinished, setAnimationFinished] = useState(false); // Track if animation is done
  const [showPassword, setShowPassword] = useState(false) // use this to create toogle for hide / reveal password button
  const [mounted, setMounted] = useState(false); // Track if component is mounted , use to prevent hydration mismatch
  const deleteSpeed = 100;
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    setMounted(true); // ensure effect only run on client
  }, []);  
  useEffect(() => {
    if (!mounted) return; // Prevent running on server;
    // Stop the animation if the last word is fully typed and deletion is false
    if (animationFinished) return;
    const handleTyping = () => {
      const word = keywords[index];
      setCurrentWord((prev) => (isDelete ? prev.slice(0, -1) : word.slice(0, prev.length + 1)));

      if (!isDelete && currentWord === word) {
        if (index === keywords.length - 1) {
          setTypingSpeed(50);
          setAnimationFinished(true);
        } else {
          setIsDelete(true);
          setTypingSpeed(150);
          
        }
      }

      if (isDelete && currentWord === "") {
        setIsDelete(false);
        setIndex((prev) => (prev + 1) % keywords.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [currentWord, isDelete ? deleteSpeed : typingSpeed, index, keywords, typingSpeed, animationFinished]);

  return (
    <div className="Container min-h-screen min-w-screen">
      <div className="LogoContainer flex justify-center items-center h-fit-content w-full pt-10">
        <h1 className="Logo">Cylockr</h1>
      </div>
      <div className="KeywordContainer flex justify-center items-center h-fit-content w-full">
        <span className="Keyword">{currentWord}</span>
        {animationFinished ? null : (
          <span className="Caret animate-blink">|</span>
        )}
      </div>

      <section>
        <div className="flex justify-center align-center px-6 py-6  mx-auto md:h-auto lg:py-20 md:py-28 sm:py-32 ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-200 dark:border-black">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <h1 className="text-xl lg:px-1 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-700">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 lg:px-1 text-sm font-medium text-gray-900 dark:text-gray-700">Your email</label>
                  <input type="email" name="email" id="email" className=" bg-gray-50 border text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 lg:px-1 text-sm font-medium text-gray-900 dark:text-gray-700">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 placeholder-zinc-400 dark:text-zinc-600"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-2 flex items-center px-2 text-gray-500 dark:text-zinc-600"
                      onClick={togglePasswordVisibility}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 9V7a4 4 0 00-8 0v2m-2 0a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V10z"
                          />
                        </svg>
                      ) : (
                        // Lock icon (when the password is hidden)
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 15v2m-3.5-2A3.5 3.5 0 1015.5 15m-3 0v-2a1 1 0 10-2 0v2m6-6V8A4 4 0 008 8v2m-4 0a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V10z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start lg:px-1">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-700 font-semibold">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-normal text-gray-600 hover:underline dark:text-primary-500">Forgot password ?</a>
                </div>
                <div className="w-full flex justify-center align-center">
                  <button type="submit" className="w-1/3 justify-center dark:text-gray-500 bg-gray-300 hover:text-zinc-700 hover:border border-zinc-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                </div>
                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet ? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
