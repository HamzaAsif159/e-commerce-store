import React, { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
/* Local imports */
import {
  SelectedProducts,
  RemoveProduct,
  AddToCart,
} from "../Redux/Actions/ProductActions"

export default function ProductDetail() {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product)
  const cartProduct = useSelector((state) => state.allcartItems.cartItems)

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
      dispatch(RemoveProduct())
    }
  }, [productId])

  return (
    <section className="overflow-hidden text-gray-600 body-font">
      {Object.keys(product).length === 0 ? (
        <h1 className="text-3xl font-bold text-center">...Loading</h1>
      ) : (
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full rounded lg:w-1/2 lg:h-auto max-h-min"
              src={image}
            />
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                {title}
              </h1>
              <p className="leading-relaxed">{description}</p>
              <div className="flex items-center justify-between pb-5 mt-6 mb-5 border-b-2 border-gray-100">
                <span className="text-2xl font-medium text-gray-900 title-font">
                  Price: ${price}
                </span>
                {cartProduct.filter((items) => items.id === product.id)
                  .length ? (
                  <button className="px-4 py-2 text-lg text-white transition ease-in bg-gray-800 border-gray-900 rounded-full">
                    Added
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(AddToCart(product))}
                    className="px-4 py-2 text-sm uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
