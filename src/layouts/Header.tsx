import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex gap-4">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </header>
  );
};

export default Header;
