import { Link } from 'react-router-dom';

const Home = () => {
  return <h1>My Home Page <Link to='/products'>Go to products</Link></h1>
}

export default Home;