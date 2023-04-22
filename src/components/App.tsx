import React from 'react'
import Hero from './Hero';
import Landing from './Landing'
import Card from './Card';
import Profile from './Profile';

const app = () => {
  return (
    <div className="relative m-0">
      <Landing />
      <main className='relative'>
        <Hero />
        <Profile />
        <Card title="Experience" quote='afsfdsa' author='fad fads'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default app;
