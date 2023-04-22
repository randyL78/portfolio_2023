import React from 'react';
import Card, { CardProps } from './Card';
import { Theme } from './enums/theme';

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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Card>
  )
}

export default Profile;