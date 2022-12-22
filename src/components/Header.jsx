import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className="bg-blue-800 h-16 flex items-center justify-between px-8">
      <h2 className=" text-white text-2xl font-bold cursor-pointer uppercase">
        <Link to="/">MyStore</Link>
      </h2>
      <Link to={"/cart"}>
        <img
          src="./cart.svg"
          alt="cart-icon"
          className="h-8 text-white cursor-pointer"
        />
      </Link>
    </nav>
  )
}
