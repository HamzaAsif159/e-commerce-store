import React from "react"

export default function Textarea() {
  return (
    <div>
      <label
        for="message"
        className="block mb-2 font-bold text-gray-900 dark:text-white"
      >
        Address
      </label>
      <textarea
        id="message"
        rows="6"
        className="block p-2.5 w-full text-base
            font-normal text-gray-700 rounded-lg border border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Enter Your Address"
        required
      ></textarea>
    </div>
  )
}
