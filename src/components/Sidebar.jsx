import React from 'react'

const Sidebar = ({onGoPage, page}) => {
  return (
    <div className='sidebar'>
      <button
        onClick={() => onGoPage('content')}
        data-selected={page === 'content'}
      >
      <i className='fa-regular fa-file-lines' />
      Content
      </button>

      <button
        onClick={() => onGoPage('customize')}
        data-selected={page === 'customize'}
      >
        <i className='=fa-solid fa-pen-ruler' />
        Customize
      </button>
    </div>
  )
}

export default Sidebar