import React from 'react'
import Hero from '@components/Hero';
import Landing from '@components/Landing';
import Card, { CardProps } from '@components/Card';
import Profile from '@components/Profile';
import { Theme } from '@enums/theme';

const experienceQuote: CardProps['quote'] = {
  text: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
  author: 'Martin Golding',
}

const app = () => {
  return (
    <div className="relative m-0">
      <Landing />
      <main className='relative'>
        <Hero />
        <Profile />
        <Card title='Experience' quote={experienceQuote} theme={Theme.neutral} >
          <p>Coming soon!</p>
        </Card>
      </main>
    </div>
  );
};

export default app;
