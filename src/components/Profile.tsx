import React from 'react';
import Card, { CardProps } from '@components/Card';
import avatar from '../img/rdl_profile_2021.webp';

const cardProps: CardProps = {
  title: 'Profile',
  quote: {
    text: 'Good software, like wine, takes time.',
    author: 'Joel Spolsky',
  }
}

const Profile = () => {
  return (
    <Card title={cardProps.title} quote={cardProps.quote} >
      <div className="md:p-12 md:mx-12 flex flex-col lg:flex-row">
        <div className="lg:w-1/3">
          <h3 className="text-center text-blue-900 font-light text-3xl mb-4">About me</h3>
          <p>
            I'm a Fullstack developer with an insatiable thirst for learning more about software development, including multiple languages.
          </p>
        </div>
        <div className="lg:w-1/3">
          <div className="m-auto relative rounded-full shadow-theme-light bg-stone-300 bg-gradient-to-tl from-white w-56 h-56 my-6 lg:my-0">
            <img src={avatar} className="absolute w-52 h-52 rounded-full start-2 top-2" alt="Photo of Randy ripping his shirt off Superman-style wearing a t-shirt that says I'm a programmer. What's your superpower?" />
          </div>
        </div>
        <div className="lg:w-1/3">
          <h3 className="text-center text-blue-900 font-light text-3xl mb-4">Details</h3>
          <ul>
            <li>
              <strong>Location:</strong>
              <p>Lynchburg, VA. USA</p>
            </li>
            <li className='mt-1'>
              <strong>GitHub:</strong>
              <p><a href='https://github.com/randyL78'>github.com/randyL78</a></p>
            </li>
            <li className='mt-1'>
              <strong>LinkedIn:</strong>
              <p><a href='https://www.linkedin.com/in/randydlayne'>linkedin.com/in/randydlayne</a></p>
            </li>
            <li>
              <strong>Email:</strong>
              <p><a href='mailto:rdlayne78@gmail.com'>rdlayne78@gmail.com</a></p>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  )
}


export default Profile;