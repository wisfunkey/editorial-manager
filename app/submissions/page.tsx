"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function SubmissionsPage() {
  const [user] = useState("Siyang Dai")

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav user={user} />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 space-y-4">
          <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:underline">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Submissions Being Processed for Author</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Results per page</span>
              <Select defaultValue="10">
                <SelectTrigger className="w-[70px]">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <p className="text-sm text-gray-600">Page: 1 of 1 (1 total submissions)</p>
        </div>

        <div className="rounded-lg border bg-white shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>Manuscript Number</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Initial Date Submitted</TableHead>
                <TableHead>Status Date</TableHead>
                <TableHead>Current Status</TableHead>
                <TableHead>Notice</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Action Links
                  </Link>
                </TableCell>
                <TableCell>JCSS-D-25-00019</TableCell>
                <TableCell>Reliability Analysis of Deep Learning Algorithms in Real-world Applications</TableCell>
                <TableCell>Jan 14 2025 7:46AM</TableCell>
                <TableCell>Feb 2 2025 1:25AM</TableCell>
                <TableCell>Accepted</TableCell>
                <TableCell>
                  <Link href="/payment-notice">
                    <Button variant="destructive" size="sm">
                      Payment Required
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

