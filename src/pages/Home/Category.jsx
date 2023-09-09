import { useParams } from 'react-router-dom'

const Category = () => {
    const { id } = useParams();
    return (
        <div>
            this is category:{id}
        </div>
    )
}

export default Category