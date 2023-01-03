import React from "react"
import { useForm } from "react-hook-form"

export default function Input({ ...props }) {
  return (
    <div className="my-2">
      <label for="Input" className="form-label inline-block mb-1 font-bold">
        {props.name}
      </label>
      <input
        {...register("Last  Name")}
        type={props.type}
        className="input"
        id="Input"
        placeholder={`Enter ${props.name}`}
        required
      />
    </div>
  )
}
