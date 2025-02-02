"use client"

import { useState } from "react"
import { ChevronLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DeployPage() {
  const [user] = useState("Siyang Dai")
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  // Simulate deployment progress
  const startDeployment = () => {
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav user={user} />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 space-y-4">
          <Link href="/invoice" className="inline-flex items-center text-blue-600 hover:underline">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Invoice
          </Link>
          <h1 className="text-2xl font-bold">Deploy and Publish</h1>
        </div>

        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              {isComplete ? "Publication Complete!" : "Publication Status"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>

              {isComplete ? (
                <div className="rounded-lg bg-green-50 p-6 text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-600" />
                  <h3 className="mb-2 text-lg font-semibold text-green-900">Successfully Published!</h3>
                  <p className="text-green-700">
                    Your manuscript has been successfully published and is now available online.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-center">
                  <p>Manuscript ID: JCSS-D-25-00019</p>
                  <p>Title: Reliability Analysis of Deep Learning Algorithms in Real-world Applications</p>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={startDeployment}
                    disabled={progress > 0 && !isComplete}
                  >
                    {progress > 0 && !isComplete ? "Publishing..." : "Start Publication"}
                  </Button>
                </div>
              )}
            </div>

            {isComplete && (
              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4 text-blue-800">
                  <h4 className="mb-2 font-semibold">Next Steps:</h4>
                  <ul className="list-inside list-disc space-y-1">
                    <li>Your article will be indexed in major academic databases</li>
                    <li>You will receive a confirmation email with the final publication details</li>
                    <li>The DOI will be activated within 24 hours</li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Link href="/dashboard">
                    <Button variant="outline">Return to Dashboard</Button>
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

