import Logo from "../assets/logo-text.png"

const Nav = () => {
  return (
    <div className="sticky top-0 flex-shrink-0 w-full lg:w-auto flex justify-center z-50">
      <nav className="container mx-auto p-4  flex justify-between items-center bg-white">
        <img src={Logo} alt="" />
        <ul className="justify-between flex gap-4">
          <li className="text-pink-500">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="mr-4">
          <button className="btn rounded-2xl">Sign In</button>
          <button className="btn  bg-pink-500 border-0 rounded-2xl">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
