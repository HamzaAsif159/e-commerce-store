import React from "react"

export default function Modal(props) {
  return (
    <div className="absolute inset-0 m-auto bg-blue-200 text-black h-3/6 w-6/12 p-10 rounded-lg">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="font-bold text-xl">
          Wohoo! Your order has been confirmed
        </h1>
        <h3>Thank you for ordering. We appreciate your trust</h3>
        <hr className=" h-2 w-56 bg-black mt-1.5 mb-1" />
        <button
          onClick={props.handleClick}
          className="mt-12 bg-white p-2 font-bold rounded-lg cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  )
}
