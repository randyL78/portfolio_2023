import React from 'react'

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-screen">
        <div className="text-center text-white absolute top-1/4 start-1/2 -translate-x-1/2 translate-y-1/2">
          <h1 className="text-6xl font-bold">Randy D. Layne</h1>
          <hr className="my-5 opacity-25" />
          <h2 className="text-2xl font-light">Software Developer</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero;