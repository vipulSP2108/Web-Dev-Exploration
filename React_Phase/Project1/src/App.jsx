import React from 'react'
import Background from './components/Background'
import Upperbackground from './components/Upperbackground'

function App() {
  return (
    <>
      <div className=' z-0 relative bg-zinc-800 h-screen w-full'>
        <Background />
        <Upperbackground />
      </div>
    </>
  )
}

export default App