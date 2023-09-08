import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const LeftContent = () => {
    const [showData,setShowData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response = await fetch(`http://localhost:3000/categories`);
            const newData=await response.json();
            setShowData(newData)
        }
        fetchData();
        
        
    },[])
    return (
      <>
        <h1>All Categories</h1>
        {showData.map((data) => (
          <p key={data.id} className="" >
            <Link className='text-decoration-none'>{data.name}</Link>
          </p>
        ))}
      </>
    );
}

export default LeftContent