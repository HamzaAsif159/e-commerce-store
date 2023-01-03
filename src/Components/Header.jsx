import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Header() {
  const cartItemsCount = useSelector(
    (state) => state.allcartItems.cartItems.length
  )
  return (
    <nav className="flex items-center justify-between h-16 px-8 bg-blue-800">
      <h2 className="text-2xl font-bold text-white uppercase cursor-pointer ">
        <Link to="/">MyStore</Link>
      </h2>
      <Link to={"/cart"}>
        <img
          src="./cart.svg"
          alt="cart-icon"
          className="inline h-8 text-white cursor-pointer"
        />
        <div className="inline ml-2 text-3xl font-semibold text-white">
          {cartItemsCount}
        </div>
      </Link>
    </nav>
  )
}
