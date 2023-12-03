import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="py-6 flex justify-center gap-6 mb-3 text-card">
      <Link className="hover:text-black focus:underline" to={"/"}>
        Weather
      </Link>
      <Link className="hover:text-black focus:underline" to={"/map"}>
        Map
      </Link>
    </header>
  );
};
