
import { useParams, Link } from 'react-router-dom';

function ProductDetailsPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <Link to='..' relative='path'>Go Back</Link> {/* If we do not use relative prop, it goes to home page default value is route*/}
    </>
  )
}

export default ProductDetailsPage;