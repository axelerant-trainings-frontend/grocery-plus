import React from 'react'

const Planet = ({ planet }) => {
  return (
    <div className='py-2 px-5 bg-black my-4 mx-0 rounded-2xl'>
      <h3 className='my-2 mx-0 text-[#ffb841]'>{planet.name}</h3>
      <p className='my-2 mx-0 text-[#999]'>Population - {planet.population}</p>
      <p className='my-2 mx-0 text-[#999]'>Terrain - {planet.terrain}</p>
    </div>
  )
}

export default Planet
