import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import '../styles/Sidebar.css'

const Sidebar = ({onGoPage, page}) => {
  return (
    <div className='sidebar'>
      <button
        onClick={() => onGoPage('content')}
        data-selected={page === 'content'}
      >
      <FontAwesomeIcon icon="fa-solid fa-file-lines" />
      Content
      </button>

      <button
        onClick={() => onGoPage('customize')}
        data-selected={page === 'customize'}
      >
        <FontAwesomeIcon icon="fa-solid fa-pen-ruler" />
        Customize
      </button>
    </div>
  )
}

export default Sidebar