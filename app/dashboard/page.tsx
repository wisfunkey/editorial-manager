"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Nav } from "@/components/nav"

export default function DashboardPage() {
  const [user] = useState("Siyang Dai")

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav user={user} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr_300px]">
          {/* Left Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Author Main Menu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="#" className="block text-blue-600 hover:underline">
                  Alternate Contact Information
                </Link>
                <Link href="#" className="block text-blue-600 hover:underline">
                  Unavailable Dates
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>New Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-blue-600">
                  Submit New Manuscript
                </Button>
                <div className="mt-4 space-y-2">
                  <p>Submissions Sent Back to Author (0)</p>
                  <p>Incomplete Submissions (0)</p>
                  <p>Submissions Waiting for Author's Approval (0)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revisions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>Submissions Needing Revision (0)</p>
                  <p>Revisions Sent Back to Author (0)</p>
                  <p>Incomplete Submissions Being Revised (0)</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/submissions" className="text-blue-600 hover:underline">
                    Submissions with a decision (1)
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Author Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="#" className="block text-blue-600 hover:underline">
                  Author Guide
                </Link>
                <Link href="#" className="block text-blue-600 hover:underline">
                  Open Access Information
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Author Webinars</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Helping authors Succeed: How to submit a paper and check the status</p>
                <p className="mt-2 text-sm text-gray-600">12th February 10:30 am London / 04:00 pm Chennai</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

