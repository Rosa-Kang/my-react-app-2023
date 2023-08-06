import React from 'react';
import Resume from './components/Resume';
import Sidebar from './components/Sidebar';
import TemplateLoader from './components/TemplateLoader';
import PersonalDetails from './components/personal-info/PersonalDetails';
import AddEducationSection from './components/education/AddEducationSection';
import AddExperienceSection from './components/experience/AddExperienceSection';
import Customize from './components/Customize';

const App = () => {

  return (
    <div className='app'>
      <div className="edit-slide">
        <Sidebar onGoPage={onGoPage} page={currentPage} />

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
              setPrevSate(null);
            }}
          />

          {currentPage === 'content' && (
            <>
              <PersonalDetails />
              <AddEducationSection />
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