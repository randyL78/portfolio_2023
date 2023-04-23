import { Education } from '@interfaces';
import React from 'react';

interface Props {
  education: Education
}

const EducationBody = ({ education }: Props) => {
  const { title } = education;

  return (
    <h3>{title}</h3>
  )
}

export default EducationBody;
