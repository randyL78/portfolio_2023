import React from 'react';
import Card, { CardProps } from '@components/Card';
import { Theme } from '@enums';
import { experiences } from '@data/experience';
import ExperienceBody from '@components/ExperienceBody';

const experienceQuote: CardProps['quote'] = {
  text: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
  author: 'Martin Golding',
}

const Experience = () => {
  return (
    <Card title='Experience' quote={experienceQuote} theme={Theme.neutral} >
      <div className="pt-10">
        {experiences.map(experience =>
          <ExperienceBody experience={experience} key={experience.company + experience.endDate} />
        )}
      </div>
    </Card>
  )
}

export default Experience;