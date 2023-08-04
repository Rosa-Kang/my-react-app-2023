import React from 'react';
import '../styles/TemplateLoader.css'

const TemplateLoader = ({onClear, onTemplateLoad}) => {
  return (
    <div className='template-loader'>
      <button onClick={onClear} className='clear-resume'>
        <i className='fa-solid fa-trash' />
        Clear Resume
      </button>
      <button onClick={onTemplateLoad} className="load-example">
        Load Example
      </button> 
    </div>
  )
}

export default TemplateLoader;