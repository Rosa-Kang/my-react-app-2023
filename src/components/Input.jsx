import React from 'react'
import '../styles/Input.css'

const Input = ({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  optional,
  recommended,
  "data-key": dataKey
}) => {
  return (
    <div className='input'>
      <label htmlFor={id}>
        <span className='label-text'>{labelText}</span>
        {optional&& <span className='optional-text'>optional</span>}
        {recommended&& <span className='recommended-text'>recommended</span>}
      </label>

      {type === "textarea" ? (
        <textarea
        id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        >

        </textarea>
      ) : (
          <input
           type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
          >
          </input>
      )}
    </div>
  )
}

export default Input