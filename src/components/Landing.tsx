import React from 'react'

const Landing = () => {
  return (
    <div className="top-0 bottom-0 absolute start-0 end-0 landing bg-cover bg-center" >
      <div className="top-0 bottom-0 absolute start-0 end-0 bg-blue-900 opacity-50"></div>
    </div >
  )
}

const landingStyles = {
  backgroundImage: `url(./img/circuit-board-background.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center"

}

export default Landing;