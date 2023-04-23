import React from 'react'
import Card, { CardProps } from '@components/Card';
import { educations } from '@data/education';
import EducationBody from './EducationBody';

const cardProps: CardProps = {
  title: "Education",
  quote: {
    text: 'Education is never a waste.',
    author: 'Sebastian Valmont in Dangerous Liasons',
  }
}

const Education = () => {
  return (
    <Card title={cardProps.title} quote={cardProps.quote} >
      {educations.map(education =>
        <EducationBody key={education.institution + education.title} education={education} />
      )}
    </Card>
  );
};

export default Education;