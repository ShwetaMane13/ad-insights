const NavBar = (props) => {
  const { setViewDashboard } = props;

  const toggleViewDashboard = ({ target }) => {
    const { id } = target;
    id === "navbar-option-dashboard"
      ? setViewDashboard(true)
      : setViewDashboard(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__app-logo">
        <span>App Logo</span>
      </div>
      <div className="navbar__options">
        <span
          id="navbar-option-dashboard"
          onClick={(e) => toggleViewDashboard(e)}
        >
          Dashboard
        </span>
        <span
          id="navbar-option-create-ads"
          onClick={(e) => toggleViewDashboard(e)}
        >
          Create Ads
        </span>
      </div>
    </div>
  );
};

export default NavBar;
