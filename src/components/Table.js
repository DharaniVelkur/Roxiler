import React from 'react'

const Table = ({fetcheddata,total,perpage,page,setPage}) => {
    const nextPage =() =>{
        setPage(page+1);
    }
    const previouspage=() =>{
        setPage(page-1);
    }
    
  return (
    <div>
            <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
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
      <td>{e.category}</td>
      <td>{e.sold.toString()}</td>
      <td>{e.image}</td>
    </tr>
    )}
  </tbody>
</table>
<button disabled={page===1} onClick={previouspage}>Previous</button>
<button disabled={Math.floor(total/perpage)===(page-1)} onClick={nextPage}>Next</button>
    </div>
  )
}

export default Table
