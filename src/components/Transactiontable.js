import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';
import BarChart from './BarChart';
import Statistics from './Statistics';
import Piechart from './Piechart';
const Transactiontable = () => {
    const [selectedOption,setSelectedOption] =useState(3);
    const [searchtext,setSearchtext] =useState("");
    const [page,setPage] =useState(1);
    const [fetcheddata,setFetcheddata] = useState(null);
    let response = async () =>{
        let result =await axios.get('http://localhost:4000/combineddata',{
            params:{
                month: selectedOption,
                search:searchtext,
                page:page
            }
        });
        console.log(result.data);
        setFetcheddata(result.data);
        }

    useEffect(()=>{
        response();
    },[selectedOption,searchtext,page])
  return (
    <>
    <input type='text' value={searchtext} onChange={e=>setSearchtext(e.target.value)}/>
    <select value={selectedOption} onChange={e=>setSelectedOption(e.target.value)}>
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">Decmeber</option>
    </select>
     <Table fetcheddata={fetcheddata?.transactions?.transactions} 
     total={fetcheddata?.transactions?.total} 
     perpage={fetcheddata?.transactions?.perPage} 
     page={fetcheddata?.transactions?.page}
     setPage={setPage}
     />
     <Statistics data={fetcheddata?.statistics} />
     <BarChart data={fetcheddata?.barChart}/>
     <Piechart data={fetcheddata?.pieChart}/>
    </>
  )
}

export default Transactiontable
