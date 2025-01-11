/* eslint-disable react/prop-types */
import classes from './css/PostItem.module.css';

export default function PostItem({ post }) {
  const { title, description, image } = post;
  return (
    <>
      <div className={classes['post-card']}>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt="test" />
      </div>
    </>
  );
}
