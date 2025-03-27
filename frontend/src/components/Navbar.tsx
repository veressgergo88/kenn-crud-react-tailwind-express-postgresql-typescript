const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Clients</a>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" />
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
