import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className="bg-cyan-700 h-16 flex items-center">
      <h2 className="ml-4 text-white text-2xl font-bold cursor-pointer">
        <Link to="/">MyStore</Link>
      </h2>
    </nav>
  )
}
