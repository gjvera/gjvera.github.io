import React from "react"
import NavLinks from "../components/Links"

const Home = () => {
  return (
    <div 
      className="my-32 mx-40
    p-4 border w-full border-green flex overflow-auto min-h-fit justify-center">
      <div className="border-l border-l-blue-100 pl-8 flex flex-col gap-3 h-fit self-baseline ml-20">
        <NavLinks />
      </div>
    </div>
  )
}

export default Home
