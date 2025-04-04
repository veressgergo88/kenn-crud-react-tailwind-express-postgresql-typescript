type NavBarProps = {
  onOpen: () => void
  onFilterChange: (value: string) => void
}

const NavBar = ({onOpen, onFilterChange}: NavBarProps) => {
  const handleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(event.target.value)
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Clients</a>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" onChange={handleSearchChange}/>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary" onClick={onOpen}>Add Client</a>
      </div>
    </div>
  );
};

export default NavBar;
