import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const LeftContent = () => {
    const [showData,setShowData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response = await fetch(`http://newspaper-server-4cmkjqvyb-tokiosman0135-gmailcom.vercel.app/categories`);
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
            <Link to={`/category/${data.id}`} className='text-decoration-none'>{data.name}</Link>
          </p>
        ))}
      </>
    );
}

export default LeftContent