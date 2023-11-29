import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header >
        <Link to={'/'}>Weather</Link>
        <Link to={'/map'}>Map</Link>
    </header>
  );
}
