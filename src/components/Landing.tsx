import React from 'react';
import background from '../img/circuit-board-background.webp';

const Landing = () => {
  return (
    <div style={styles} className="top-0 bottom-0 absolute start-0 end-0 landing bg-cover bg-center bg-fixed" >
      <div className="top-0 bottom-0 absolute start-0 end-0 bg-blue-900 opacity-50"></div>
    </div >
  )
}

const styles = {
  backgroundImage: `url('${background}')`
}

export default Landing;