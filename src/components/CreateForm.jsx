import React from 'react';
import "../styles/CreateForm.css"

const CreateForm = ({onClick, buttonText}) => {
  return (
    <button className='create-form' onClick={onClick}>
      <h4 className="button-content">
        <i className="fa-solid fa-plus">
          {buttonText}
        </i>
      </h4>
    </button>
  )
}

export default CreateForm