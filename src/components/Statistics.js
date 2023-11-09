import React from 'react'

const Statistics = ({data}) => {
  return (
    <>
    <h1>Statistics</h1>
    <p>{`Total Sale: ${data?.totalSaleAmount}`}</p>
    <p>{`Total sold item: ${data?.soldItemsCount}`}</p>
    <p>{`Total not sold item: ${data?.unsoldItemsCount}`}</p>
    </>
  )
}

export default Statistics