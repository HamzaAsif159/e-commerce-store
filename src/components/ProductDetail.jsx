import React, { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
/* Local imports */
import {
  SelectedProducts,
  removeProduct,
} from "../Redux/Actions/ProductActions"

export default function ProductDetail() {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product)

  const { image, title, description, price } = useSelector(
    (state) => state.product
  )
  async function FetchProductDetails() {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Error:", err))

    dispatch(SelectedProducts(response.data))
  }

  useEffect(() => {
    if (productId && productId !== "") FetchProductDetails()
    return () => {
      dispatch(removeProduct())
    }
  }, [productId])

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      {Object.keys(product).length === 0 ? (
        <h1 className="text-3xl text-center font-bold">...Loading</h1>
      ) : (
        <div class="container px-5 py-10 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto max-h-min object-cover object-center rounded"
              src={image}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {title}
              </h1>
              <p class="leading-relaxed">{description}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <span class="title-font font-medium text-2xl text-gray-900">
                Price: ${price}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
