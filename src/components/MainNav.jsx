import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import classes from './css/MainNav.module.css'
export default function MainNav() {
  return (
    <>
      <header>
        <nav >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
        </nav>
      </header>
    </>
  );
}
