import { useParams } from 'react-router-dom';
import { DUMMY_POSTDATA } from '../util/posts';
import classes from './EventDetail.module.css';
export default function EventDetail() {
  const { eventId } = useParams();
  const post = DUMMY_POSTDATA.filter((post) => eventId === post.id)[0];
  const { title, description, image } = post;
  console.log(post);
  return (
    <>
      <div className={classes['post-card']}>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt="test" />
        <div>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    </>
  );
}
