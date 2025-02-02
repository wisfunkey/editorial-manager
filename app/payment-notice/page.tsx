"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function PaymentNoticePage() {
  const [user] = useState("Siyang Dai")
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav user={user} />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 space-y-4">
          <Link href="/submissions" className="inline-flex items-center text-blue-600 hover:underline">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Submissions
          </Link>
          <h1 className="text-2xl font-bold">Payment Notice</h1>
        </div>

        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="text-center text-xl text-red-600">NOTICE: Payment Required</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 text-center">
              <p className="text-lg">
                Congratulations on your manuscript acceptance! To proceed with publication, a payment of{" "}
                <span className="font-bold">$2600 USD</span> is required.
              </p>
              <p>Manuscript ID: JCSS-D-25-00019</p>
              <p>Title: Reliability Analysis of Deep Learning Algorithms in Real-world Applications</p>
            </div>

            <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
              <p className="text-sm">
                Note: The payment is required to cover publication costs including editing, formatting, and online
                hosting.
              </p>
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => router.push("/invoice")}>
                Proceed to Payment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

