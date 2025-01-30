"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import GlowButton from "../components/Button"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn === "true") {
      router.push("/")
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic validation
    if (!email || !password) {
      setError("Kripya email aur password dono bharen")
      return
    }
    // Here you would typically validate against a backend
    // For this example, we'll use a dummy check
    if (email === "abc@gmail.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true")
      router.push("/")
    } else {
      setError("Galat email ya password")
    }
  }

  return (
   
<div className="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
<div className="grid gap-8">
  <div
    id="back-div"
    className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
  >
    <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
    >
      <div className="bg-gradient-to-r to-blue-200 from-purple-200 -m-10 p-8 rounded-3xl">
      <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
        Log in
      </h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-2  dark:text-gray-400 text-lg">Email</label>
          <input
            id="email"
            className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
            type="email"
            placeholder="abc@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
          <input
            id="password"
            className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
            type="password"
            placeholder="123456"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <a
          className="group text-blue-400 transition-all duration-100 ease-in-out"
          href="#"
        >
          <span
            className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          >
            Forget your password?
          </span>
        </a>
        <GlowButton/>
      </form>
      <div className="flex flex-col mt-4 items-center justify-center text-sm">
        <h3 className="dark:text-gray-300">
          Don't have an account?
          <a
            className="group text-blue-400 transition-all duration-100 ease-in-out"
            href="#"
          >
            <span
              className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
            >
              Sign Up
            </span>
          </a>
        </h3>
      </div>
     
      <div
        id="third-party-auth"
        className="flex items-center justify-center mt-5 flex-wrap"
      >
        <button
         
          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px]"
            src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
            alt="Google"
          />
        </button>
        <button
         
          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px]"
            src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
            alt="Linkedin"
          />
        </button>
        <button
        
          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px] filter dark:invert"
            src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
            alt="Github"
          />
        </button>
        <button
      
          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px]"
            src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
            alt="Facebook"
          />
        </button>
        <button
         
          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px] dark:gray-100"
            src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
            alt="twitter"
          />
        </button>

        <button
         
          className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
        >
          <img
            className="max-w-[25px]"
            src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
            alt="apple"
          />
        </button>
      </div>

      <div
        className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
      >
        <p className="cursor-default">
          By signing in, you agree to our
          <a
            className="group text-blue-400 transition-all duration-100 ease-in-out"
            href="#"
          >
            <span
              className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
            >
              Terms
            </span>
          </a>
          and
          <a
            className="group text-blue-400 transition-all duration-100 ease-in-out"
            href="#"
          >
            <span
              className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
            >
              Privacy Policy
            </span>
          </a>
        </p>
      </div>
    </div>
    </div>
  </div>
  </div>
</div>
  )
}

