import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import type React from "react"
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return(
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}