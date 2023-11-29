import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
        <Link to={'/'} >Home</Link>
        <Link to={'/map'}>Map</Link>
    </header>
  );
}
