import { Experience } from '@interfaces';
import React from 'react';

interface Props {
  experience: Experience;
}

const ExperienceBody = ({ experience }: Props) => {
  const { title, company, location, description, startDate, endDate } = experience;
  return (
    <div className="mb-12 flex flex-col lg:flex-row">
      <div className="lg:w-1/4 lg:text-right lg:mb-4 pr-6">
        <h3 className="font-bold text-2xl mb-1">{company}</h3>
        <p className="italic">{startDate} - {endDate}</p>
      </div>
      <div className="lg:w-3/4 lg:pl-6 lg:mr-32">
        <div className="flex justify-between align-text-bottom">
          <h4 className="font-bold text-xl">{title}</h4>
          <p className="italic text-blue-800 mb-1">{location}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ExperienceBody;
