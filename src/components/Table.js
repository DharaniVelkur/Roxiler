import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";


const Table = ({fetcheddata,total,perpage,page,setPage,loading}) => {
    const nextPage =() =>{
        setPage(page+1);
    }
    const previouspage=() =>{
        setPage(page-1);
    }
    
  return (
    loading ? (
      <SkeletonTheme color="#f3f3f3" highlightColor="#e6e6e6">
        <Skeleton count={10} height={60} /> 
      </SkeletonTheme>
    ) :
    <div className='overflow-auto'>
  <table className="table table-striped table-bordered border-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Sold</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
    
    {fetcheddata?.map(e=>
    <tr>
      <th scope="row">{e.id}</th>
      <td>{e.title}</td>
      <td>{e.description}</td>
      <td>{e.price}</td>
      <td>{e.category}</td>
      <td>{e.sold.toString()}</td>
      <td>{e.image}</td>
    </tr>
    )}
  </tbody>
</table>
<div className='d-flex justify-content-center align-items-center '>
<button disabled={page===1} onClick={previouspage} className='btn border-end' style={{border:0}}>❮ Previous</button>
<button disabled={Math.floor(total/perpage)>=(page-1)} className='btn border-start' style={{border:0}} onClick={nextPage}>Next ❯</button>
</div>
    </div>
  )
}

export default Table
