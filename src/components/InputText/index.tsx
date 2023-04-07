import React from 'react'

interface IInputText {
  defaultValue: string
  onChange: (value: string) => void
}

function InputText({ onChange, defaultValue }: IInputText) {
  const toInputUppercase = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value

    value = value.replace(/[^\w\s]/gi, '')
    value = value.replace(/[0-9]/g, '')
    value = value.toUpperCase()

    event.target.value = value
  }

  return (
    <>
      <label htmlFor="name" className="text-yellow-800 mt-8 mb-2">
        <strong>Type your fullname</strong>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        inputMode="text"
        onChange={(event) => onChange(event.target.value)}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
          toInputUppercase(event)
        }
        placeholder={defaultValue}
        defaultValue={defaultValue}
        className="input font-bold bg-yellow-800 text-yellow-800 bg-opacity-10"
      />
    </>
  )
}

export default InputText
