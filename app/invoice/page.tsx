"use client"

import { useState } from "react"
import Image from "next/image"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function InvoicePage() {
  const [user] = useState("Siyang Dai")

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav user={user} />
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl space-y-6 bg-white p-8 shadow-lg">
          {/* Journal Header */}
          <div className="flex items-center gap-4 bg-[#F7B917] p-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/journal%20of%20computer%20and%20system%20science.PNG-hzPcrNybwYs0qhaHGv8NvLH4Pjjybx.png"
              alt="Journal Cover"
              width={100}
              height={150}
              className="rounded"
            />
            <div>
              <h1 className="text-2xl font-bold">Journal of Computer and System Sciences</h1>
              <p className="text-sm">Supports open access • Open archive</p>
            </div>
          </div>

          <h2 className="text-center text-xl font-semibold text-gray-600">ELSEVIER JOURNAL INVOICE</h2>

          {/* Invoice Header */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold">Elsevier Publishing Company</h3>
              <p>(Corporate Headquarters)</p>
              <p>230 Park Avenue, 7th floor</p>
              <p>New York, NY 10169, USA</p>
              <p className="mt-2">
                <span className="font-semibold">Email: </span>
                <a href="mailto:elsevier@editorialmanager.com" className="text-blue-600 hover:underline">
                  elsevier@editorialmanager.com
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-4 bg-blue-50 p-2">
                <span className="font-semibold">Invoice Number</span>
                <span>JCSS-D-25-00019</span>
              </div>
              <div className="grid grid-cols-2 gap-4 bg-blue-50 p-2">
                <span className="font-semibold">Payment Terms</span>
                <span>Due on receipt</span>
              </div>
              <div className="grid grid-cols-2 gap-4 bg-blue-50 p-2">
                <span className="font-semibold">Due Date</span>
                <span>2/22/2025</span>
              </div>
            </div>
          </div>

          {/* Billing Information */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold">Bill to:</h3>
              <p>Corresponding Author: Siyang Dai</p>
              <p>Email Address:</p>
              <p>Co-Authors: Deshun Cao, Na Li, Yian Guo</p>
              <div className="mt-2">
                <a href="mailto:lina.gday@inopec.com" className="text-blue-600 hover:underline block">
                  lina.gday@inopec.com
                </a>
                <a href="mailto:tingyi.nan@inopec.com" className="text-blue-600 hover:underline block">
                  tingyi.nan@inopec.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold">Pay to:</h3>
              <p>Account Name: WISDOM FAMOUS</p>
              <p>Bank: LEAD BANK</p>
              <p>Account Number: 213512519432</p>
              <p>Routing Number: 101019944</p>
              <p>Account Type: personal checking</p>
              <p>Bank Address: 9450 Southwest Gemini Drive, Beaverton, OR 97008, USA</p>
            </div>
          </div>

          {/* Invoice Items */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quantity</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Unit Price</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>
                  Manuscript in Production: Peer Review Charges and Production and Electronic Charges (JCSS-D-25-00019)
                </TableCell>
                <TableCell className="text-right">$753.00</TableCell>
                <TableCell className="text-right">$753.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Manuscript in Production: DOI Activation Charges (JCSS-D-25-00019)</TableCell>
                <TableCell className="text-right">$399.00</TableCell>
                <TableCell className="text-right">$399.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Manuscript in Production: Publication Charges (JCSS-D-25-00019)</TableCell>
                <TableCell className="text-right">$1392.00</TableCell>
                <TableCell className="text-right">$1392.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Invoice Summary */}
          <div className="space-y-2">
            <div className="flex justify-between border-t pt-4">
              <span>Sub Total</span>
              <span>$2,544.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (5.0%)</span>
              <span>$56.00</span>
            </div>
            <div className="flex justify-between border-t pt-4 text-lg font-bold">
              <span>Total</span>
              <span>$2,600.00</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end">
            <Button variant="outline">Print</Button>
          </div>

          <p className="text-center text-sm text-gray-500">Elsevier © 2025 Elsevier Ltd. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

