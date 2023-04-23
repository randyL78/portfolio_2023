import React from 'react'
import Hero from '@components/Hero';
import Landing from '@components/Landing';
import Profile from '@components/Profile';
import Experience from '@components/Experience';
import Education from '@components/Education';

const app = () => {
  return (
    <div className="relative m-0">
      <Landing />
      <main className='relative'>
        <Hero />
        <Profile />
        <Experience />
        <Education />
        <div className='bg-transparent pt-10'></div>
      </main>
    </div>
  );
};

export default app;
