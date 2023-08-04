import React from 'react'
import CollapsedForm from './CollapsedForm'

const DisplayForms = ({
          forms,
          FormComponent,
          onChange,
          onCancel,
          onHide,
          onRemove,
          toggleCollapsed,
          titleKey,
          arrayName,
}) => {
  return (
    <div className='forms-container'>
      {forms.map((form)=> form.isCollapsed? (
        <CollapsedForm
          onClick={toggleCollapsed}
          key={form.id}
          form={form}
          title={form[titleKey]}
          arrayName={arrayName}
          hideForm={onHide}
        />
      ) : (
          <FormComponent
            onChange={onChange}
            form={form}
            key={form.id}
            cancel={onCancel}
            save={toggleCollapsed}
            remove={onRemove}
          />
      ))}
    </div>
  )
}

export default DisplayForms