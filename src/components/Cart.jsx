import React from "react"
import { useSelector, useDispatch } from "react-redux"

export default function Cart() {
  const cartData = useSelector((state) => state.allcartItems.cartItems)

  const cartProducts = cartData.map((product) => {
    const { id, title, description, price, image, category } = product
    return (
      <div class="mt-20">
        <ul class="space-y-4">
          <li class="flex items-center">
            <div className=" w-40 h-40">
              <img src={image} alt="" class="object-cover rounded" />
            </div>

            <div class="ml-4">
              <h3 class="text-xl font-semibold text-gray-900">{title}</h3>
              <dl class="mt-0.5 space-y-px text-normal text-gray-600">
                <div>
                  <dt class="inline">Category:</dt>
                  <dd class="inline"> {category}</dd>
                </div>
                <div>
                  <dt class="inline font-bold">Price:</dt>
                  <dd class="inline font-bold"> $34</dd>
                </div>
              </dl>
            </div>
            <div class="flex items-center justify-end flex-1 gap-2">
              <button class="text-gray-600 transition hover:text-red-600">
                <span class="sr-only">Remove item</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    )
  })
  console.log(cartData)
  return (
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <header class="text-center">
            <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>
          {cartProducts}
          <div class="flex justify-end pt-8 mt-8 border-t border-gray-100">
            <div class="w-screen max-w-lg space-y-4">
              <dl class="space-y-0.5 text-sm text-gray-700">
                <div class="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>£200</dd>
                </div>
              </dl>
              <div class="flex justify-end">
                <a
                  href="#"
                  class="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
