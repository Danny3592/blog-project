// import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { useLoaderData, useNavigation } from 'react-router-dom';
import Header from '../components/Header';
import PostList from '../components/PostList';

export default function HomePage() {
  const data = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  console.log("data = ",data)
  return (
    <>
      <Header />
      {isLoading && <p>Loading....</p>}
      {!isLoading && <PostList posts={data} />}
    </>
  );
}

export async function loader() {
  try {
    const response = await fetch('http://localhost:3000/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    // console.log('data = ', data);
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}
