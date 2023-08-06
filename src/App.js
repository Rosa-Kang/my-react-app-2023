import React, { useState } from 'react';
import exampleData from './example-data';

import Resume from './components/Resume';
import Sidebar from './components/Sidebar';
import TemplateLoader from './components/TemplateLoader';
import PersonalDetails from './components/personal-info/PersonalDetails';
import AddEducationSection from './components/education/AddEducationSection';
import AddExperienceSection from './components/experience/AddExperienceSection';
import Customize from './components/Customize';

const App = () => {
  const [currentPage, setCurrentPage] = useState('content');
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [prevState, setPrevState] = useState(initialState);

  const handlePersonalInfoChange = (e) => {
    const { key } = e.target.value;
    setPersonalInfo({...personalInfo, [key]: e.target.value})
  }

  return (
    <div className='app'>
      <div className="edit-slide">
        <Sidebar onGoPage={setCurrentPage} page={currentPage} />

        <div className="form-container">
          <TemplateLoader
            onTemplateLoad={() => {
              setPersonalInfo(exampleData.personalInfo);
              setSections(exampleData.sections);
            }}

            onClear={() => {
              setPersonalInfo({
                fullName: '',
                email: '',
                phoneNumber: '',
                address: '',
              });
              setSections({ educations: [], experiences: [] });
              setPrevState(null);
            }}
          />

          {currentPage === 'content' && (
            <>
              <PersonalDetails
                onChange={handlePersonalInfoChange}
                fullName={personalInfo.fullName}
                email={personalInfo.email}
                address={personalInfo.address}
                phoneNumber={personalInfo.phoneNumber}
              />
              <AddEducationSection

              />
              <AddExperienceSection />
            </>
          )}

          <Customize />
        </div>

      </div>
      
      <Resume
        personalInfo={personalInfo}
        sections={sections}
        layout={resumeLayout}
      />
    </div>
  )
}

export default App