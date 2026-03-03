function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="header">
      <div>Admin Panel</div>
      <div>{user?.name}</div>
    </div>
  );
}

export default Header;