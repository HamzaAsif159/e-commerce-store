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
        class="w-64 p-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md"
        key={id}
      >
        <Link to={`/product/${id}`}>
          <img class="rounded-t-lg" src={image} className="h-48 item" />
          <div class="p-5">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            <p class="mb-3 font-semibold text-gray-700 ">Price: ${price}</p>
            <p class="mb-3 font-normal text-gray-700 ">{category}</p>
          </div>
        </Link>
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
