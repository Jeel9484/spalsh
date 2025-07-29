"use client"
import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"
import { HiOutlineSun } from "react-icons/hi"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const [email, setEmail] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("savedEmail") ?? "jeelgodhani94@gmail.com";
    }
    return "jeelgodhani94@gmail.com";
  });

  const [password, setPassword] = useState<string>("9484");

  const [remember, setRemember] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("rememberMe") === "true";
    }
    return false; 
  });

  const router = useRouter();

  useEffect(() => {
    if (remember) {
      localStorage.setItem("savedEmail", email);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("savedEmail");
      localStorage.removeItem("rememberMe");
    }
  }, [email, remember]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-custom">
      {/* Greeting */}
      <div className="flex items-center gap-4 mb-6">
        <HiOutlineSun className="w-12 h-12 text-yellow-400" />
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 leading-snug">
            Hello!
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome to Infosnap
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="jeedee@eugeniuses.com"
            className="mt-1 w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Type password"
            className="mt-1 w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        {/* Forgot link */}
        <div className="text-right">
          <Link href="/forgot-password"
          className="text-sm text-gray-500 hover:underline"
          >
              Forgot password?
          </Link>
        </div>

        {/* Sign in */}
        <button
          type="submit"
          className="w-full py-3 mt-2 bg-secondary rounded-lg text-white font-medium cursor-pointer hover:bg-secondary transition"
        >
          Sign in
        </button>
      </form>
    </div>
  )
}
