import React from 'react'
import DisplaySection from '../DisplaySection'

const EducationInfoSection = ({education}) => {
  return (
    <div className="education-info-section resume-section">
      <DisplaySection
        array={educations}
        InfoComponent={EducationInfo}
        title="Education"
      />
    </div>
  );
}

export default EducationInfoSection