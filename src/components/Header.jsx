import { Link } from 'react-router-dom';
import classes from './css/Header.module.css';
export default function Header() {
  return (
    <>
      <div className={classes.header}>
        <h1>HomePage</h1>
        <button><Link to="/events/new">Create a new post</Link></button>
      </div>
    </>
  );
}
