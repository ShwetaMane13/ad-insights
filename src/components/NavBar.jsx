const NavBar = (props) => {
  const { setViewDashboard } = props;

  const toggleViewDashboard = ({ target: { innerText } }) => {
    innerText === "Dashboard"
      ? setViewDashboard(true)
      : setViewDashboard(false);
  };

  return (
    <>
      <section className="navbar">
        <section className="navbar__app-logo">
          <span>App Logo</span>
        </section>
        <section className="navbar__options">
          <span onClick={toggleViewDashboard}>Dashboard</span>
          <span onClick={toggleViewDashboard}>Create Ads</span>
        </section>
      </section>
    </>
  );
};

export default NavBar;
