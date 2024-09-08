import { Link } from "react-router-dom";

const Head = (): JSX.Element => {
  return (
    <>
      <header className="w-full border-2 border-red-500 p-10 sticky top-0 bg-red-300">
        <nav className="w-full flex items-center  gap-2">
          <div className="self-left">Title</div>
          <ul className="w-full flex self-center gap-3 justify-end">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/about">products</Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Head;
