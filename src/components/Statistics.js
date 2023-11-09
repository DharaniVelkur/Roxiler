import React from 'react'

const Statistics = ({data,selectedOption}) => {
 
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <p className='fw-bold text-center pt-3' style={{fontSize:"26px",color:"red"}}>Statistics-{selectedOption}</p>
    <div className='text-center p-2' style={{backgroundColor:"#F8DF8C",borderRadius:"8px"}}>
     <p style={{fontWeight:'bold'}}>{`Total Sale: ${data?.totalSaleAmount}`}</p>
     <p style={{fontWeight:'bold'}}>{`Total sold item: ${data?.soldItemsCount}`}</p>
     <p style={{fontWeight:'bold'}}>{`Total not sold item: ${data?.unsoldItemsCount}`}</p>
    </div>
    </div>
  )
}

export default Statistics;