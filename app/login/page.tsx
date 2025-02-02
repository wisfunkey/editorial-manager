"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Nav } from "@/components/nav"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const username = formData.get("username")
    const password = formData.get("password")

    if (username === "Siyang Dai" && password === "12345678") {
      router.push("/dashboard")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="hidden md:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/journal%20of%20computer%20and%20system%20science.PNG-hzPcrNybwYs0qhaHGv8NvLH4Pjjybx.png"
                alt="Journal Cover"
                width={400}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6 bg-white p-8 shadow-lg">
              <div className="text-center">
                <h1 className="text-2xl font-bold">Welcome to Editorial Manager</h1>
                <p className="text-gray-600">Please login to continue</p>
              </div>
              {error && <div className="rounded bg-red-50 p-4 text-red-600">{error}</div>}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" name="username" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" required />
                </div>
                <div className="space-y-4">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

