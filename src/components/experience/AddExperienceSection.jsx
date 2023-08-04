import React from 'react'
import ExpandSection from '../ExpandSection'
import DisplayForms from '../DisplayForms'
import CreateForm from '../CreateForm'
import ExperienceForm from './ExperienceForm'

const AddExperienceSection = ({
                experiences,
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
     <div className="add-experience-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Experience"
        iconName="fa-solid fa-briefcase"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={experiences}
          onChange={onChange}
          onCancel={onCancel}
          toggleCollapsed={toggleCollapsed}
          onHide={onHide}
          onRemove={onRemove}
          FormComponent={ExperienceForm}
          titleKey="companyName"
          arrayName="experiences"
        />

        <CreateForm onClick={createForm} buttonText="Experience" />
      </div>
    </div>
  )
}

export default AddExperienceSection