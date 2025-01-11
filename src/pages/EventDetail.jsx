import { useParams } from 'react-router-dom';
import classes from './EventDetail.module.css';
import { useQuery } from 'react-query';
import { getEvents } from '../util/http';
export default function EventDetail() {
  const { eventId } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });

  let content;
  if (isPending) {
    content = <p>Loading......</p>;
  }
  if (data) {
    const post = data.filter((post) => eventId === post.id)[0];
    const { title, description, image } = post;
    content = (
      <div className={classes['post-card']}>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt="test" />
        <div>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    );
  }

  if (isError) {
    content = <p>ERROR</p>;
  }

  return <>{content}</>;
}
