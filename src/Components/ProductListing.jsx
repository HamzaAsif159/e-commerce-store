import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useEffect } from "react"
import { SetProducts } from "../Redux/Actions/ProductActions"

export default function ProductListing() {
  const products = useSelector((state) => state.allproducts.products)
  const dispatch = useDispatch()

  async function fetchData() {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err)
      })
    dispatch(SetProducts(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const productItems = products.map((product) => {
    const { id, image, title, price, category } = product
    return (
      <div
        className="w-64 p-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md"
        key={id}
      >
        <div className="p-5">
          <Link to={`/product/${id}`}>
            <img className="rounded-t-lg h-48 item" src={image} />
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            <p className="mb-3 font-semibold text-gray-700 ">Price: ${price}</p>
            <p className="mb-3 font-normal text-gray-700 ">{category}</p>
          </Link>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {productItems}
      </div>
    </>
  )
}
