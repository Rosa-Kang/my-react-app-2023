import { useState } from 'react';
import uniqid from 'uniqid';

import './styles/App.css';
import Sidebar from './components/Sidebar';
import exampleData from './example-data';
import TemplateLoader from './components/TemplateLoader';
import PersonalDetails from './components/personal/PersonalDetails';
import AddEducationSection from './components/education/AddEducationSection';
import AddExperienceSection from './components/experience/AddExperienceSection';
import Customize from './components/Customize';
import Resume from './components/Resume';


function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [sectionOpen, setSectionOpen] = useState(null);
  const [currentPage, setCurrentPage] = useState("content");
  const [resumeLayout, setResumeLayout] = useState('top');
// Store prevState to revert changes when user clicks "cancel"
  const [prevState, setPrevState] = useState(null);

  const handlePersonalInfoChange=(e)=> {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  const handleSectionChange =(e) => {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest('.section-form');
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue;
        return obj;
      }),
    });
  } 

  const createForm = (arrayName, object) => {
    setPrevState(null);
    //Clone array to not push object to original
    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({ ...sections, [arrayName]: section });
  }

  const createEducationForm = () => {
    createForm("educations", {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    })
  }

  const createExperienceForm = () => {
    createForm("experiences", {
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    })
  }

  const setOpen = (sectionName) => setSectionOpen(sectionName);
  
  const removeForm = () => {
    const form = e.target.closest('.section-form');
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    })
  }

  const cancelForm = (e) => {
    //if no prevState found remove form
    if (prevState === null) {
      removeForm(e);
      return
    }

    const sectionForm = e.target.closest('.section-form');
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          //Revert back to previous state
          form = prevState;
          form.isCollapsed = true;
        }

        return form;
      })
    })
  }

  const toggleValue = (e, key) => {
    const sectionForm = e.target.closest('.section-form');
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          setPrevState(Object.assign({}, form));
          form[key] = !form[key];
        }
        return form;
      }),
    })
  }

  const toggleCollapsed = (e) => toggleValue(e, 'isCollapsed');
  const toggleHidden = (e) => toggleValue(e, 'isHidden');

  return (
    <div className='app'>
      <div className="edit-side">
        <Sidebar onGoPage={setCurrentPage} page={currentPage} />
        <div className="form-container">
          <TemplateLoader
            onTemplateLoad={()=> {
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

              setSections({ educations: [], experience: [] });
              setPrevState(null);
            }}
          />
          {currentPage === "content" && (
            <>
              <PersonalDetails
                onChange={handlePersonalInfoChange}
                fullName={personalInfo.fullName}
                email={personalInfo.email}
                phoneNumber={personalInfo.phoneNumber}
                address={personalInfo.address}
              />
              <AddEducationSection
                educations={sections.educations}
                isOpen={sectionOpen === "Education"}
                onChange={handleSectionChange}
                createForm={createEducationForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
              />
              <AddExperienceSection
                experiences={sections.experience}
                isOpen={sectionOpen === "Experience"}
                onChange={handleSectionChange}
                createForm={createExperienceForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
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
