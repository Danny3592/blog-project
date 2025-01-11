import classes from './css/Header.module.css';
export default function Header() {
  return (
    <>
      <div className={classes.header}>
        <h1>HomePage</h1>
        <button>Create a new post</button>
      </div>
    </>
  );
}
