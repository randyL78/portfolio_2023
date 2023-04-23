import { Education } from '@interfaces';
import React from 'react';

interface Props {
  education: Education
}

const EducationBody = ({ education }: Props) => {
  const { title, institution, startDate, endDate, location, gpa, focus, description } = education;

  return (
    <div className="mb-12 flex flex-col lg:flex-row">
      <div className="lg:w-1/4 lg:text-right lg:mb-4 pr-6">
        <h3 className="font-bold text-2xl mb-1">{institution}</h3>
        <p className="italic">{startDate}{endDate && ` - ${endDate}`}</p>
        {location && <p className="italic text-blue-800">{location}</p>}
      </div>
      <div className="lg:w-3/4 lg:pl-6 lg:mr-32">
        <div className="flex justify-between align-text-bottom">
          <h4 className="font-bold text-xl lg:text-2xl mb-1">{title}</h4>
          <p className="text-blue-800 font-bold mb-1">{gpa && `GPA: ${gpa}`}</p>
        </div>
        <p className='text-xl text-stone-500 font-bold mb-2'>{focus}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default EducationBody;
