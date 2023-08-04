import React from 'react'


import '../../styles/Section.css'
import ExpandSection from '../ExpandSection'
import DisplayForms from '../DisplayForms'
import CreateForm from '../CreateForm'

const AddEducationSection = ({
   educations,
   isOpen,
   onChange,
   createForm,
   setOpen,
   onCancel,
   toggleCollapsed,
   onHide,
   onRemove,
}) => {
  return (
    <div className='add-education-section section'>
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        iconName="fa-solid fa-graduation-cap"
      />

      <div className={`section-content ${isOpen ? 'open' : ''}`}>
        <DisplayForms
          forms={educations}
          FormComponent={EducationForm}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="schoolName"
          arrayName="educations"
        />
        <CreateForm onClick={createForm} buttonText="Education" />
      </div>
    </div>
  )
}

export default AddEducationSection