import React, { useState } from 'react';
import uniqid from 'uniqid';
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
  const [prevState, setPrevState] = useState(null);
  const [sectionOpen, setSectionOpen] = useState(null);
  const [resumeLayout, setResumeLayout] = useState('top');

  const handlePersonalInfoChange = (e) => {
    const { key } = e.target.value;
    setPersonalInfo({...personalInfo, [key]: e.target.value})
  }

  const handleSectionChange = (e) => {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest('.section-form');
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections, [arrayName]: section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue;
        return obj;
      }),
    })
  }

  const createEducationForm = () => {
    createForm('educations', {
      degree: '',
      schoolName: '',
      location: '',
      startDate: '',
      endDate: '',
      isCollapsed: false,
      isHidden: false,
      id:uniqid(),
    })
  }

  const setOpen = (sectionName) => setSectionOpen(sectionName);

  const createExperienceForm = () => {
    createForm('experience', {
      companyName: '',
      positionTitle: '',
      location: '',
      description: '',
      startDate: '',
      endDate: '',
      isCollapsed: false,
      isHidden: false,
      id:uniqid(),
    })
  }

  const removeForm = (e) => {
    form = e.target.closest('.section-form');
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    })
  }

  const cancelForm = (e) => {
    if (prevState == null) {
      removeForm(e);
      return;
    }

    const sectionForm = e.target.closest('.section-form');
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections, [arrayName]: section.map((form) => {
        if (form.id === id) {
          form = prevState;
          form.isCollapsed = true;
        }
        
        return form;
    })})
  }

  const toggleCollapsed = (e) => toggleValue(e, 'isCollapsed');
  const toggleHidden = (e) => toggleValue(e, 'isHidden');

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
                educations={sections.educations}
                isOpen={sectionOpen === 'Education'}
                onChange={handleSectionChange}
                createForm={createEducationForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
              />
              <AddExperienceSection
                experiences={sections.experiences}
                isOpen={sectionOpen === 'Experience'}
                onChange={handleSectionChange}
                createForm={{ createExperienceForm }}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHidden={toggleHidden}
                onRemove={removeForm}
              />
            </>
          )}

          <Customize
            isShown={currentPage === 'customize'}
            onColChange={setResumeLayout}
          />
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