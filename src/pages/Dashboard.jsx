import React from 'react'
import Layout from '../layout/Layout'

const Dashboard = () => {
  return (
    <div className='flex flex-row'>
<Layout />
     <div className=" gap-3">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className='font-medium '>91/102</h1>
          <h3 className='font-medium'>Attendence</h3>
        </div>

      </div>
      
     </div>
    </div>
  )
}

export default Dashboard
