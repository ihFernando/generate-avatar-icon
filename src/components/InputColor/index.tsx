import React from 'react'

interface IInputColor {
  id: string
  label: string
  defaultValue: string
  onChange: (value: string) => void
}

function InputColor({ id, label, onChange, defaultValue }: IInputColor) {
  return (
    <>
      <label htmlFor="bg-color" className="text-yellow-800 mt-4 mb-2">
        <strong>{label}</strong>
      </label>
      <input
        type="color"
        id={id}
        name={id}
        onChange={(event) => onChange(event.target.value)}
        defaultValue={defaultValue}
        className="input w-52 p-0 cursor-pointer"
      />
    </>
  )
}

export default InputColor
