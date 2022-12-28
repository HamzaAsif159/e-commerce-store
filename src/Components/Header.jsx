import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Header() {
  const cartItemsCount = useSelector(
    (state) => state.allcartItems.cartItems.length
  )
  return (
    <nav className="bg-blue-800 h-16 flex items-center justify-between px-8">
      <h2 className=" text-white text-2xl font-bold cursor-pointer uppercase">
        <Link to="/">MyStore</Link>
      </h2>
      <Link to={"/cart"}>
        <img
          src="./cart.svg"
          alt="cart-icon"
          className="h-8 inline text-white cursor-pointer"
        />
        <div className="text-white text-3xl font-semibold  inline ml-2">
          {cartItemsCount}
        </div>
      </Link>
    </nav>
  )
}
