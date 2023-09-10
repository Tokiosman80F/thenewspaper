import { useLoaderData } from 'react-router-dom'
import CategoryNewsCard from './CategoryNewsCard';

const Category = () => {
    
    const newsData=useLoaderData();
    console.log(newsData);
    return (
        <div>
       
            {
                newsData.map((data,id)=><CategoryNewsCard key={id} data={data}></CategoryNewsCard>)
            }
        </div>
    )
}

export default Category