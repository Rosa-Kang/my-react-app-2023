import React from 'react'

const DisplaySection = ({
    array,
    InfoComponent,
    title
}) => {   
  return (
      <React.Fragment>
          {
              //Show resume header if at least one item in array is not hidden
              <h3 className="header-text">{title}</h3>
          }
          {array.map((info) => !info.isHidden &&
              <InfoComponent info={info} key={info.id} />)}
    </React.Fragment>
  )
}

export default DisplaySection