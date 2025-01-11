/* eslint-disable react/prop-types */
import classes from './css/PostList.module.css';
import PostItem from './PostItem';

// import { DUMMY_POSTDATA } from '../util/posts';
import { Link } from 'react-router-dom';

export default function PostList({ posts }) {
  return (
    <>
      <section className={classes['posts-container']}>
        <h1>Posts-List</h1>
        <ul className={classes['posts-list']}>
          {posts.map((post) => (
            <li key={post.title}>
              <Link to={post.id}>
                <PostItem post={post} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
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
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}
