import React from 'react';

import {Header , ChartsHeader, LineChart} from '../../components';

const Line = () => {
  return (
    <div className=' m-4 md:10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='InflationRate' />

      <div className='w-full'>
          <LineChart />
      </div>
    </div>
  )
}

export default Line