import classes from './css/PostList.module.css';
import PostItem from './PostItem';

import { DUMMY_POSTDATA } from '../util/posts';
import { Link } from 'react-router-dom';

export default function PostList() {
  return (
    <>
      <section className={classes['posts-container']}>
        <h1>Posts-List</h1>
        <ul className={classes['posts-list']}>
          {DUMMY_POSTDATA.map((post) => (
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
