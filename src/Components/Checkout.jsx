import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

import Orderbtn from "./OrderBtn"
import Textarea from "./Textarea"

export default function Checkout(props) {
  const navigate = useNavigate()
  const notify = () => {
    toast.success("Your order is on way!", { duration: 4000 })
    navigate("/")
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      FirstName: "",
      LastName: "",
      Email: "",
    },
  })

  return (
    <div>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-xl align-center md:text-2xl font-bold uppercase mb-4">
          Add your details for order
        </h1>
        <form onSubmit={handleSubmit(notify)}>
          <div className="my-2">
            <label for="first-name" className=" inline-block mb-1 font-bold">
              First Name
            </label>
            <input
              {...register("FirstName", {
                maxLength: 12,
                pattern: /^[A-Za-z]+$/i,
                message: "First name must be less than 12",
              })}
              type="text"
              className="input"
              id="first-name"
              placeholder="Enter first name"
              required
            />
            {errors.FirstName && (
              <p className="mt-2 text-red-800 text-sm">
                Must be alphabet & less than 12
              </p>
            )}
          </div>
          <div className="my-2">
            <label for="last-name" className=" inline-block mb-1 font-bold">
              Last Name
            </label>
            <input
              {...register("LastName", {
                maxLength: 12,
                pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              className="input"
              id="last-name"
              placeholder="Enter last name"
              required
            />
            {errors.LastName && (
              <p className="mt-2 text-red-800 text-sm">
                Must be alphabet & less than 12
              </p>
            )}
          </div>
          <div className="my-2">
            <label for="email" className=" inline-block mb-1 font-bold">
              Email
            </label>
            <input
              {...register("Email", {
                pattern:
                  /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/,
              })}
              type="text"
              className="input"
              id="email"
              placeholder="Enter email address"
              required
            />
            {errors.Email && (
              <p className="mt-2 text-red-800 text-sm">Invalid email address</p>
            )}
          </div>
          <Textarea />
          <Orderbtn />
        </form>
      </div>
    </div>
  )
}
