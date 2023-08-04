import React from 'react'
import ResumeColsEdit from './customize/ResumeColsEdit';
import AccentColorEdit from './customize/AccentColorEdit';
import FontEdit from './customize/FontEdit';

const Customize = ({ isShown, onColChange }) => {
  return (
    <div
      className="customize"
      style={{ display: isShown ? undefined : "none" }}
    >
      <div>
        <ResumeColsEdit onColChange={onColChange} />
      </div>
      <div>
        <AccentColorEdit />
      </div>
      <div>
        <FontEdit />
      </div>
    </div>
  );
}

export default Customize