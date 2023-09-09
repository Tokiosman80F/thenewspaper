import { useLoaderData, useParams } from 'react-router-dom'
import CategoryNewsCard from './CategoryNewsCard';

const Category = () => {
    const { id } = useParams();
    const newsData=useLoaderData();
    console.log(newsData);
    return (
        <div>
            this is category:{id}
            {
                newsData.map((data,id)=><CategoryNewsCard key={id} data={data}></CategoryNewsCard>)
            }
        </div>
    )
}

export default Category